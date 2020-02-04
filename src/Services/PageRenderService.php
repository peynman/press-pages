<?php

namespace Larapress\Pages\Services;

use Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Str;
use Larapress\CRUD\Translation\TranslationHelper;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Models\PageSchema;

class PageRenderService implements IPageRenderService
{
    /**
     * @param \Illuminate\Http\Request $request
     * @param string $slug
     * @return Page|null
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function findPageForRequest(Request $request, string $slug)
    {
        /** @var \Larapress\Pages\Services\IPageProvider $pageProvider */
        $pageProvider = app()->make(IPageProvider::class);
        $pages = $pageProvider->getPagesForRequest($request);

        $router = new Router(new Dispatcher());
        foreach ( $pages as $page ) {
            $router->get($page->slug, [
                'id' => $page->id
            ]);
        }

        $req = Request::create("http://localhost/$slug");
        $r = $router->getRoutes()->match($req);
        if (is_null($r)) {
            return null;
        }

        foreach ($pages as $page) {
            if ($page->id === $r->getAction('id')) {
                return $page;
            }
        }
    }

    /**
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema $schema
     * @return \Illuminate\Http\Response|string|\Illuminate\View\View
     */
    public function renderPage(Page $page, $schema)
    {
        $config = [
            'page' => $page,
            'schema' => $schema,
            'language' => $this->getLanguageParams(),

        ];

        return view(self::getThemeViewName('vue.app'), [
            'config' => $config
        ]);
    }

    protected function getLanguageParams() {
        $lang = TranslationHelper::getLocaleLanguage(app()->getLocale());

        return [
            'rtl' => $lang->isRTL(),
            'name' => $lang->getName(),
            'title' => $lang->getTitle(),
        ];
    }

    public static function getThemeViewName($viewName)
    {
        $theme = config('larapress.pages.theme.blade.name');
        $package = config('larapress.pages.theme.blade.namespace');
        $view = null;
        if (isset($theme) && !Str::startsWith($viewName, 'themes.'.$theme)) {
            $view = (isset($package) ? $package.'::':'').'themes.'.$theme.'.'.$viewName;
        } else {
            $view = (isset($package) ? $package.'::':'').$viewName;
        }
        return $view;
    }
}