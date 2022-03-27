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
            $wildcardRoutes = config('larapress.pages.render', []);
            usort($wildcardRoutes, function ($a, $b) {
                return $a['priority'] - $b['priority'];
            });
            foreach ($wildcardRoutes as $routeName => $routeMeta) {
                $route = Route::get($routeMeta['match'], function (IPageRenderService $service, Request $request) use($routeMeta) {
                    return view($routeMeta['blade'], [
                        'config' => $service->getDefaultConfig($request),
                    ]);
                })->name($routeName);
                $whereConds = $routeMeta['where'] ?? null;
                if (!is_null($whereConds)) {
                    foreach ($whereConds as $where => $cond) {
                        $route->where($where, $cond);
                    }
                }
            }
        }
    });
