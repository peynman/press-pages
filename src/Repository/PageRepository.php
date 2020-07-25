<?php

namespace Larapress\Pages\Repository;

use Larapress\CRUD\Services\IPermissionsService;
use Larapress\Pages\Services\IPageProvider;
use Illuminate\Support\Str;

class PageRepository implements IPageRepository {
    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageRepositories($user) {
        $repos = config('larapress.pages.safe-sources');
        $reposList = [];
        foreach ($repos as $repo) {
            $titleparts = explode('\\', $repo);
            $reposList[] = [
                'id' => $repo,
                'title' => $titleparts[count($titleparts)-1],
                'functions' => array_map(function($item) {
                    return [
                        'id' => $item,
                        'title' => $item,
                    ];
                }, array_filter(get_class_methods($repo), function($func) {
                    return Str::startsWith($func, 'get');
                }))
            ];
        }

        return $reposList;
    }

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    public function getAllPageObjectFetchers($user) {
        $providers = [];
        /** @var IPermissionsService */
        $service = app(IPermissionsService::class);
        $service->forEachRegisteredProviderClass(function($classname) use(&$providers) {
            $titleparts = explode('\\', $classname);
            $providers[] = [
                'id' => $classname,
                'title' => $titleparts[count($titleparts)-1],
            ];
        });

        return $providers;
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
