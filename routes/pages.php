<?php

use Illuminate\Support\Facades\Route;
use Larapress\Pages\Controllers\PageRenderController;

Route::middleware(config('larapress.pages.middlewares'))
    ->prefix(config('larapress.pages.prefix'))
    ->group(function () {
        PageRenderController::registerPublicWebRoutes();
    });
