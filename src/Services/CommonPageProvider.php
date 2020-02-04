<?php

namespace Larapress\Pages\Services;

use Illuminate\Http\Request;
use Larapress\Pages\Models\Page;

class CommonPageProvider implements IPageProvider
{
    /**
     * @param Request $request
     * @return \Larapress\Pages\Models\Page[]|null
     */
    public function getPagesForRequest(Request $request)
    {
        return Page::all();
    }

    /**
     * @return void
     */
    public function forgetPagesCache()
    {
    }
}