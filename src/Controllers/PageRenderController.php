<?php

namespace Larapress\Pages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Larapress\Pages\Services\IPageRenderService;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class PageRenderController extends Controller
{
    /** @var IPageRenderService */
    private $service;
    public function __construct(IPageRenderService $service)
    {
        $this->service = $service;
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public static function registerRoutes() {
        Route::any('{slug?}', '\\'.self::class.'@renderPage')
            ->where('slug', '.*')
            ->name(config('larapress.pages.routes.pages.name').'.any.view');
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @param String $slug
     * @return void
     */
    public function renderPage(Request $request, String $slug = '') {
        [$page, $route] = $this->service->findPageForRequest($request, $slug);
        if (is_null($page)) {
            abort(404);
        }

        if ($request->wantsJson()) {
            return $this->service->renderPageJSON($request, $route, $page, null);
        }

        return $this->service->renderPageHTML($request, $route, $page, null);
    }
}
