<?php

namespace Larapress\Pages\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Larapress\CRUD\Extend\Helpers;
use Larapress\Pages\Models\Page;

class DomainPageProvider implements IPageProvider
{
    /**
     * @param Request $request
     * @return \Larapress\Pages\Models\Page[]|null
     */
    public function getPagesForRequest(Request $request)
    {
        return Helpers::getCachedValue(
            'larapress.pages',
            function () {
                return Page::orderBy('zorder', 'desc')->get();
            },
            ['pages'],
            null
        );
    }


    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return array
     */
    public function getVisinlePages($user)
    {
        return Page::query()->select('id', 'name', 'options')->orderBy('zorder', 'desc')->get();
    }

    /**
     * @return void
     */
    public function forgetPagesCache()
    {
        Cache::tags(['pages'])->flush();
    }
}
