<?php

namespace Larapress\Pages\Providers;

use Illuminate\Support\ServiceProvider;
use Larapress\Pages\Commands\PageCommands;
use Larapress\Pages\Services\DomainPageProvider;
use Larapress\Pages\Services\IPageProvider;
use Larapress\Pages\Services\IPageRenderService;
use Larapress\Pages\Services\PageRenderService;


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

        $this->publishes([
            __DIR__.'/../../resources/dist' => storage_path('app/public/vendor/larapress-pages'),
        ], ['assets', 'larapress', 'larapress-pages']);

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
