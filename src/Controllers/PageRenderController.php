<?php

namespace Larapress\Pages\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use Larapress\Pages\Services\IPageRenderService;
use Illuminate\Routing\Controller;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Services\RepositoryRequest;

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
        Route::post('/repos',  '\\' . self::class . '@renderRepository')
            ->name(config('larapress.pages.routes.pages.name') . '.any.repos');

        /** @var Page[] */
        if (config('larapress.pages.enabled')) {
            $pages = Page::all();
            foreach ($pages as $page) {
                Route::match(['get'], $page->slug, [
                    'uses' => '\\' . self::class . '@renderPage',
                    'page_id' => $page->id,
                ])->name('page.any.render.' . $page->id);
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


    /**
     * Render Repository
     *
     * Render a list of repositories
     *
     * @param Request $request
     * @param String $slug
     *
     * @return Response
     */
    public function renderRepository(IPageRenderService $service, RepositoryRequest $request)
    {
        return $service->renderRepositories($request, $request->getSources());
    }
}
