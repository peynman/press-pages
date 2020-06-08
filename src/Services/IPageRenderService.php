<?php

namespace Larapress\Pages\Services;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Larapress\Pages\Models\Page;

interface IPageRenderService
{
    /**
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Routing\Route $request
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema|null $schema
     * @return \Illuminate\Http\Response|string|\Illuminate\View\View
     */
    public function renderPageHTML(Request $request, Route $route, Page $page, $schema);


    /**
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Routing\Route $request
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema|null $schema
     * @return array
     */
    public function renderPageJSON(Request $request, Route $route, Page $page, $schema);

    /**
     * @param \Illuminate\Http\Request $request
     * @param string $slug
     * @return [Route, Page]
     */
    public function findPageForRequest(Request $request, string $slug);
}
