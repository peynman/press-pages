<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Larapress\Pages\Controllers\PageRenderController;
use Larapress\Pages\Services\IPageRenderService;

Route::middleware(config('larapress.pages.middleware'))
    ->prefix(config('larapress.pages.prefix'))
    ->group(function() {
        PageRenderController::registerRoutes();
    });
