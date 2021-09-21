<?php

namespace Larapress\Pages\Providers;

use Illuminate\Support\ServiceProvider;
use Larapress\Pages\Commands\ClearPagesCache;
use Larapress\Pages\Commands\ExportPagesToJSON;
use Larapress\Pages\Commands\ImportPagesFromJSON;
use Larapress\Pages\Repository\IPageRepository;
use Larapress\Pages\Repository\PageRepository;
use Larapress\Pages\Services\IPageRenderService;
use Larapress\Pages\Services\IPageService;
use Larapress\Pages\Services\PageRenderService;
use Larapress\Pages\Services\PageService;
use Larapress\Profiles\Repository\Filter\FilterRepository;
use Larapress\Profiles\Repository\Filter\IFilterRepository;

class PackageServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(IPageRenderService::class, PageRenderService::class);
        $this->app->bind(IFilterRepository::class, FilterRepository::class);
        $this->app->bind(IPageRepository::class, PageRepository::class);
        $this->app->bind(IPageService::class, PageService::class);

        $this->app->register(EventServiceProvider::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'larapress-pages');
        $this->loadTranslationsFrom(__DIR__.'/../../resources/lang', 'larapress');
        $this->loadMigrationsFrom(__DIR__.'/../../migrations');
        $this->loadRoutesFrom(__DIR__.'/../../routes/pages.php');

        $this->publishes(
            [
            __DIR__.'/../../config/pages.php' => config_path('larapress/pages.php'),
            ],
            ['config', 'larapress', 'larapress-pages']
        );

        if ($this->app->runningInConsole()) {
            $this->commands([
                ImportPagesFromJSON::class,
                ExportPagesToJSON::class,
                ClearPagesCache::class,
            ]);
        }
    }
}
