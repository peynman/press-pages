<?php

namespace Larapress\Pages\Services;

use Illuminate\Http\Request;

interface IPageProvider
{
    /**
     * @param Request $request
     * @return \Larapress\Pages\Models\Page[]|null
     */
    public function getPagesForRequest(Request $request);

    /**
     * @return void
     */
    public function forgetPagesCache();
}