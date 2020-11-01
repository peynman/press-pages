<?php

namespace Larapress\Pages\Providers;

use Illuminate\Support\ServiceProvider;
use Larapress\Pages\Commands\PageCommands;
use Larapress\Pages\Repository\IPageRepository;
use Larapress\Pages\Repository\PageRepository;
use Larapress\Pages\Services\DomainPageProvider;
use Larapress\Pages\Services\IPageProvider;
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
        $this->app->bind(IPageProvider::class, DomainPageProvider::class);
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
        $this->loadTranslationsFrom(__DIR__.'/../../resources/lang', 'larapress');
        // $this->loadRoutesFrom(__DIR__.'/../../routes/pages.php');
        $this->loadMigrationsFrom(__DIR__.'/../../migrations');
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'larapress-pages');

        $this->publishes(
            [
            __DIR__.'/../../config/pages.php' => config_path('larapress/pages.php'),
            ],
            ['config', 'larapress', 'larapress-pages']
        );

        if ($this->app->runningInConsole()) {
            $this->commands([
                PageCommands::class,
            ]);
        }
    }
}
