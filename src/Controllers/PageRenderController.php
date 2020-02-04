<?php

namespace Larapress\Pages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Larapress\Pages\Services\IPageRenderService;
use Illuminate\Routing\Controller;

class PageRenderController extends Controller
{
    public static function registerRoutes() {
        Route::any('{slug?}', '\\'.self::class.'@renderPage')
            ->where('slug', '.*')
            ->name(config('larapress.pages.routes.pages.name').'.any.view');
    }


    public function renderPage(IPageRenderService $service, Request $request, $slug) {
        $page = $service->findPageForRequest($request, $slug);
        if (is_null($page)) {
            abort(404);
        }

        return $service->renderPage($page, null);
    }
}