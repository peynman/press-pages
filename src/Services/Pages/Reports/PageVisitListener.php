<?php

namespace Larapress\Pages\Services\Pages\Reports;

use Illuminate\Contracts\Queue\ShouldQueue;
use Larapress\Pages\Services\PageVisitEvent;
use Larapress\Reports\Services\Reports\IMetricsService;

class PageVisitListener implements ShouldQueue
{
    public function __construct(public IMetricsService $metrics)
    {
    }

    public function handle(PageVisitEvent $event)
    {
        if (config('larapress.pages.reports.pages')) {
            $user = $event->getUser();

            $this->metrics->pushMeasurement(
                $event->domainId,
                $event->userId,
                null,
                $user?->getMembershipGroupIds() ?? [],
                config('larapress.pages.reports.pages'),
                config('larapress.pages.reports.group'),
                'pages.'.$event->page_id.'.visit',
                1,
                $event->filters ?? [],
                $event->timestamp,
            );
        }
    }
}
