<?php

namespace Larapress\Pages\Services;

use Illuminate\Contracts\Queue\ShouldQueue;
use Larapress\CRUD\Services\CRUD\ICRUDReportSource;
use Larapress\Pages\Services\PageVisitEvent;
use Larapress\Reports\Services\Reports\ReportSourceTrait;
use Larapress\Reports\Services\Reports\IMetricsService;
use Larapress\Reports\Services\Reports\IReportsService;
use Larapress\Reports\Services\Reports\MetricsSourceProperties;

class PageVisitReport implements ICRUDReportSource, ShouldQueue
{
    use ReportSourceTrait;

    const MEASUREMENT_TYPE = 'page_visit';

    /** @var IReportsService */
    private $reports;

    /** @var IMetricsService */
    private $metrics;

    /** @var array */
    private $avReports;

    // start dot groups from 1 position_1.position_2.position_3...
    private $metricsDotGroups = [
        'page' => 2,
        'filter' => 3,
    ];

    public function __construct()
    {
        /** @var IReportsService */
        $this->reports = app(IReportsService::class);
        /** @var IMetricsService */
        $this->metrics = app(IMetricsService::class);

        $this->avReports = [
            'metrics.total.signin' => function ($user, array $options) {
                $props = MetricsSourceProperties::fromReportSourceOptions($user, $options, $this->metricsDotGroups);
                return $this->metrics->queryMeasurement(
                    'pages\.[0-9]*\.visit.*',
                    self::MEASUREMENT_TYPE,
                    null,
                    $props->filters,
                    $props->groups,
                    $props->domains,
                    $props->from,
                    $props->to
                );
            },
            'metrics.windowed.signin' => function ($user, array $options) {
                $props = MetricsSourceProperties::fromReportSourceOptions($user, $options, $this->metricsDotGroups);
                return $this->metrics->aggregateMeasurement(
                    'pages\.[0-9]*\.visit.*',
                    self::MEASUREMENT_TYPE,
                    null,
                    $props->filters,
                    $props->groups,
                    $props->domains,
                    $props->from,
                    $props->to,
                    $props->window
                );
            },
        ];
    }

    public function handle(PageVisitEvent $event)
    {

        if (config('larapress.reports.reports.reports_service')) {
            $tags = array_merge([
                'domain' => $event->domainId,
                'role' => $event->role,
                'page' => $event->page_id,
                'user' => $event->userId,
            ], $event->filters);
            $this->reports->pushMeasurement('pages.visit', 1, $tags, [], $event->timestamp);
        }

        if (config('larapress.reports.reports.metrics_table')) {
            $filtersDot = implode(".", $event->filters);
            if ($filtersDot !== "") {
                $filtersDot = '.'.$filtersDot;
            }

            $this->metrics->pushMeasurement(
                $event->domainId,
                self::MEASUREMENT_TYPE,
                'page:'.$event->page_id,
                'pages.'.$event->page_id.'.visit.'.$filtersDot,
                1,
                $event->timestamp
            );
        }
    }
}
