<?php

namespace Larapress\Pages\Services;

use Illuminate\Support\Facades\Log;
use Larapress\CRUD\Services\IReportSource;
use Larapress\CRUD\Repository\IRoleRepository;
use Larapress\Pages\Services\PageVisitEvent;
use Larapress\Reports\Services\BaseReportSource;
use Larapress\Reports\Services\IReportsService;

class PageVisitReport implements IReportSource
{
    use BaseReportSource;

    /** @var IReportsService */
    private $reports;

    /** @var array */
    private $avReports;

    public function __construct(IReportsService $reports)
    {
        $this->reports = $reports;
        $this->avReports = [
            'pages.visit.total' => function ($user, array $options = []) {
                [$filters, $fromC, $toC, $groups] = $this->getCommonReportProps($user, $options);
                return $this->reports->queryMeasurement(
                    'pages.visit',
                    $filters,
                    $groups,
                    array_merge(["_value"], $groups),
                    $fromC,
                    $toC,
                    'count()'
                );
            },
            'pages.visit.windowed' => function ($user, array $options = []) {
                [$filters, $fromC, $toC, $groups] = $this->getCommonReportProps($user, $options);
                $window = isset($options['window']) ? $options['window'] : '1h';
                return $this->reports->queryMeasurement(
                    'pages.visit',
                    $filters,
                    $groups,
                    array_merge(["_value", "_time"], $groups),
                    $fromC,
                    $toC,
                    'aggregateWindow(every: '.$window.', fn: sum) '.(isset($options['func']) && is_string($options['func']) ? $options['func'] : '')
                );
            },
            'pages.visit.func' => function ($user, array $options = []) {
                [$filters, $fromC, $toC, $groups] = $this->getCommonReportProps($user, $options);
                return $this->reports->queryMeasurement(
                    'pages.visit',
                    $filters,
                    $groups,
                    array_merge(["_value"], $groups),
                    $fromC,
                    $toC,
                    isset($options['func']) ? $options['func'] : 'count()',
                );
            },
        ];
    }

    public function handle(PageVisitEvent $event)
    {
        /** @var IRoleRepository */
        $roleRepo = app(IRoleRepository::class);
        $tags = array_merge([
            'domain' => $event->domain->id,
            'role' => is_null($event->user) ? 'guest' : $roleRepo->getUserHighestRole($event->user)->name,
            'page' => $event->page_id,
        ], $event->filters);
        $this->reports->pushMeasurement('pages.visit', 1, $tags, [], $event->timestamp);
    }
}
