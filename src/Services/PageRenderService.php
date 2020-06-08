<?php

namespace Larapress\Pages\Services;

use Carbon\Carbon;
use Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Larapress\Core\Exceptions\AppException;
use Larapress\CRUD\Translation\TranslationHelper;
use Larapress\Pages\Models\Page;
use Larapress\CRUD\ICRUDUser;
use Larapress\CRUD\Models\Role;
use Larapress\Pages\Models\PageSchema;
use Larapress\Profiles\Repository\Domain\IDomainRepository;
use Illuminate\Routing\Route;

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
            return [null, null];
        }

        foreach ($pages as $page) {
            if ($page->id === $r->getAction('id')) {
                return [$page, $r];
            }
        }
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema $schema
     * @return \Illuminate\Http\Response|string|\Illuminate\View\View
     */
    public function renderPageHTML(Request $request, Route $route, Page $page, $schema)
    {
        return view('larapress-pages::vue.app', [
            'config' => $this->renderPageJSON($request, $route, $page, $schema)
        ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema $schema
     * @return array
     */
    public function renderPageJSON(Request $request, Route $route, Page $page, $schema)
    {
        $lang = TranslationHelper::getLocaleLanguage(app()->getLocale());
        $jwtToken = null;
        /** @var  ICRUDUser */
        $user = Auth::user();
        if (!is_null($user)) {
            $jwtToken = auth()->guard('api')->tokenById($user->id);
        }
        if (isset($page->options['roles'])) {
            if (is_null($user) || !$user->hasRole($page->options['roles'])) {
                throw new AppException(AppException::ERR_ACCESS_DENIED);
            }
        }

        $sources = [];
        if (isset($page->options['sources']) && is_array($page->options['sources'])) {
            foreach ($page->options['sources'] as $source) {
                $res = [];
                switch ($source['resource']) {
                    case 'object':
                        $model = $source['class'];
                        $res = call_user_func([$model, 'find'], $route->parameter($source['param']));
                    break;
                    case 'repository':
                        $repo = new $source['class'];
                        $params =  isset($source['params']) ? $source['params']: [];
                        $res = call_user_func([$repo, $source['method']], $user, ...$params);
                    break;
                }

                $sources[] = [
                    'resource' => $res,
                    'path' => $source['path']
                ];
            }
        }

        $template = [
            'name' => config('larapress.pages.default-template'),
            'props' => []
        ];
        if (isset($page->body['template'])) {
            $template = $page->body['template'];
        } else if (isset($page->options['template'])) {
            $template = $page->options['template'];
        }

        return [
            'user' => Auth::user(),
            'tokens' => [
                'api' => $jwtToken
            ],
            'title' => isset($page->options['title']) ? $page->options['title'] : config('larapress.pages.default-title'),
            'template' => $template,
            'body' => $page->body,
            'options' => $page->options,
            'datetime' => [
                'timestamp' => Carbon::now()->format('Y-m-d H:i:s e'),
            ],
            'language' => [
                'rtl' => $lang->isRTL(),
                'name' => $lang->getName(),
                'title' => $lang->getTitle(),
            ],
            'sources' => $sources
        ];
    }
}
