<?php

namespace Larapress\Pages\Services;

use Carbon\Carbon;
use Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Larapress\CRUD\Exceptions\AppException;
use Larapress\CRUD\Translation\TranslationHelper;
use Larapress\Pages\Models\Page;
use Larapress\CRUD\ICRUDUser;
use Larapress\CRUD\Models\Role;
use Larapress\Pages\Models\PageSchema;
use Larapress\Profiles\Repository\Domain\IDomainRepository;
use Illuminate\Routing\Route;
use Larapress\CRUD\Base\ICRUDService;
use Larapress\ECommerce\Services\IBankingService;
use Mews\Captcha\Facades\Captcha;
use Illuminate\Http\Response;

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
        foreach ($pages as $page) {
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
        $json = $this->renderPageJSON($request, $route, $page, $schema);
        if (is_array($json)) {
            return view('larapress-pages::vue.app', [
                'config' => $json
            ]);
        }

        return $json;
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
        /** @var  IProfileUser|ICRUDUser */
        $user = Auth::user();
        if (!is_null($user)) {
            $jwtToken = auth()->guard('api')->tokenById($user->id);
        }
        if (isset($page->options['roles']) && isset($page->options['roles'][0]['id'])) {
            $roles = collect($page->options['roles'])->pluck('id')->toArray();
            if (count($roles) > 0) {
                if (is_null($user) || !$user->hasRole($roles)) {
                    return redirect('/signin')->with('endpoint', $request->path());
                }
            }
        }


        $sources = [];
        if (isset($page->options['sources']) && is_array($page->options['sources'])) {
            /** @var ICRUDService */
            $crudService = app(ICRUDService::class);
            foreach ($page->options['sources'] as $source) {
                $res = [];
                switch ($source['resource']) {
                    case 'object':
                        switch ($source['class']) {
                            case 'captcha':
                                $res = Captcha::create('default', true);
                                break;
                            default:
                                $provider = new $source['class'];
                                $crudService->useProvider($provider);
                                $res = $crudService->show($request, $route->parameter($source['param']));
                                break;
                        }
                        break;
                    case 'repository':
                        $repo = $source['class'];
                        $safeRepos = config('larapress.pages.safe-sources');
                        if (in_array($repo, $safeRepos)) {
                            $params =  isset($source['params']) ? $source['params'] : [];
                            $repoRef = app()->make($repo);
                            $res = call_user_func([$repoRef,  $source['method']], $user, ...$params);
                        }
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

        if (!is_null($user)) {
            /** @var IBankingService */
            $cartService = app(IBankingService::class);
            /** @var IDomainRepository */
            $domainRepo = app(IDomainRepository::class);
            $domain = $domainRepo->getRequestDomain($request);
            // include carts and balance of current user
            $user['current_cart'] = $cartService->getPurchasingCart(
                $user,
                $domain,
                config('larapress.ecommerce.banking.currency.id')
            );
            $user['current_cart']['items'] = $cartService->getPurchasingCartItems(
                $user,
                $domain,
                config('larapress.ecommerce.banking.currency.id')
            );
            $user['balance'] = [
                'amount' =>  $cartService->getUserBalance(
                    $user,
                    $domain,
                    config('larapress.ecommerce.banking.currency.id')
                ),
                'currency' => config('larapress.ecommerce.banking.currency')
            ];
        }

        $channels = [];
        if (!is_null($user)) {
            if ($user->hasRole(array_merge(config('larapress.profiles.security.roles.super-role'), config('larapress.profiles.security.roles.affiliate')))) {
                $permissions = $user->getPermissions();
                foreach ($permissions as $permission) {
                    if (!in_array('crud.' . $permission[1], $channels)) {
                        $channels[] = ['name' => 'crud.' . $permission[1], 'access' => 'private']; // attach first part if permission string as name.verb
                    }
                }
            }

            $channels[] = ['name' => 'front', 'access' => 'presence'];
        }

        return [
            'user' => $user,
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
            'sources' => $sources,
            'channels' => $channels,
            'currencies' => [
                config('larapress.ecommerce.banking.currency.id') => config('larapress.ecommerce.banking.currency.title')
            ]
        ];
    }
}
