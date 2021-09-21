<?php

namespace Larapress\Pages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use Larapress\Pages\Services\IPageRenderService;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Larapress\Pages\Models\Page;

/**
 * Page Rendering
 *
 * @group Page Rendering
 */
class PageRenderController extends Controller
{
    /**
     * Undocumented function
     *
     * @return void
     */
    public static function registerPublicWebRoutes()
    {
        /** @var Page[] */
        if (config('larapress.pages.enabled')) {
            if (Schema::hasTable('pages')) {
                $pages = Page::all();
                foreach ($pages as $page) {
                    Route::match(['get'], $page->slug, [
                        'uses' => '\\' . self::class . '@renderPage',
                        'page_id' => $page->id,
                    ])
                        ->name(config('larapress.pages.routes.pages.name') . '.any.render.' . $page->id);
                }
            }
        }
    }

    /**
     * Render
     *
     * Render a page to json or html based on incomming request.
     *
     * @param Request $request
     * @param String $slug
     *
     * @return Response
     */
    public function renderPage(IPageRenderService $service, Request $request)
    {
        $route = $request->route();
        $page = Page::find($route->getAction('page_id'));

        if ($request->wantsJson()) {
            return $service->renderPageJSON($request, $route, $page, null);
        }

        return $service->renderPageHTML($request, $route, $page, null);
    }
}
