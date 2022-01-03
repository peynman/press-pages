<?php

use Illuminate\Support\Facades\Route;
use Larapress\Pages\Controllers\PageRenderController;
use Larapress\Pages\Services\Pages\IPageRenderService;
use Illuminate\Http\Request;

Route::middleware(config('larapress.pages.middlewares'))
    ->prefix(config('larapress.pages.prefix'))
    ->group(function () {
        PageRenderController::registerPublicWebRoutes();

        if (config('larapress.pages.wildcard')) {
            Route::get('/{website}', function (IPageRenderService $service, Request $request) {
                return view(config('larapress.pages.render.blade'), [
                    'config' => $service->getDefaultConfig($request),
                ]);
            })->where('website', '.*');
        }
    });
