<?php

namespace Larapress\Pages\Services\Pages\Reports;

use Larapress\CRUD\ICRUDUser;
use Larapress\Reports\Services\Reports\ICRUDReportSource;
use Larapress\Reports\Services\Reports\IMetricsService;
use Larapress\Reports\Services\Reports\ReportQueryRequest;

class PageVisitReport implements ICRUDReportSource
{
    const NAME = 'pages.visit.windowed';

    /**
     * Undocumented function
     *
     * @param IMetricsService $metrics
     */
    public function __construct(public IMetricsService $metrics)
    {
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function name(): string
    {
        return self::NAME;
    }

    /**
     * Undocumented function
     *
     * @param ICRUDUser $user
     * @param ReportQueryRequest $request
     * @return array
     */
    public function getReport(ICRUDUser $user, ReportQueryRequest $request): array
    {
        return $this->metrics->measurementQuery(
            $user,
            $request,
            config('larapress.pages.reports.group'),
            config('larapress.pages.reports.pages'),
            $request->getAggregateFunction(),
            $request->getAggregateWindow()
        )
            ->get()
            ->toArray();
    }
}
