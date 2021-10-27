<?php

namespace Larapress\Pages\Services\Pages;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Models\PageSchema;

interface IPageRenderService
{
    /**
     * @param Request $request
     * @param Route $route
     * @param Page $page
     *
     * @return \Illuminate\Http\Response|string|\Illuminate\View\View
     */
    public function renderPageHTML(Request $request, Route $route, Page $page);

    /**
     * @param Request $request
     * @param Route $route
     * @param Page $page
     *
     * @return array
     */
    public function renderPageJSON(Request $request, Route $route, Page $page);

    /**
     * @param int $pageId
     *
     * @return Page
     */
    public function findPage($pageId);

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @param Request $request
     * @param Route $route
     * @param Page $page
     *
     * @return void
     */
    public function reportPageVisit($user, Request $request, Route $route, Page $page);
}
