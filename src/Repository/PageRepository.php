<?php

namespace Larapress\Pages\Repository;

use Larapress\Pages\Services\IPageProvider;

class PageRepository implements IPageRepository {
    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageRepositories($user) {
        $repos = config('larapress.pages.safe-sources');
    }


    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageTitles($user) {
        if (is_null($user)) {
            return [];
        }

        /** @var \Larapress\Pages\Services\IPageProvider $pageProvider */
        $pageProvider = app()->make(IPageProvider::class);
        $pages = $pageProvider->getVisinlePages($user);

        $entries = [];
        foreach ($pages as $page) {
            $entries[] = [
                'title' => $page->options['title'],
                'id' => $page->id,
            ];
        }

        return $entries;
    }
}
