<?php

namespace Larapress\Pages\Services\Pages\Reports;

use Larapress\CRUD\ICRUDUser;
use Larapress\Reports\Services\Reports\ICRUDReportSource;
use Larapress\Reports\Services\Reports\ReportQueryRequest;

class PageVisitReport implements ICRUDReportSource
{
    const NAME = 'pages.visit.windowed';

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
        return [];
    }
}
