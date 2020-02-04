<?php

namespace Larapress\Pages\Services;

use Illuminate\Http\Request;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Models\PageSchema;

interface IPageRenderService
{
    /**
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema|null $schema
     * @return \Illuminate\Http\Response|string|\Illuminate\View\View
     */
    public function renderPage(Page $page, $schema);

    /**
     * @param \Illuminate\Http\Request $request
     * @param string $slug
     * @return Page|null
     */
    public function findPageForRequest(Request $request, string $slug);
}