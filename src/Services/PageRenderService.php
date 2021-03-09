<?php

namespace Larapress\Pages\Services;

use Carbon\Carbon;
use Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Larapress\Pages\Models\Page;
use Larapress\CRUD\ICRUDUser;
use Larapress\Profiles\Repository\Domain\IDomainRepository;
use Illuminate\Routing\Route;
use Larapress\ECommerce\Services\Banking\IBankingService;
use Illuminate\Support\Facades\Session;
use Larapress\CRUD\BaseFlags;
use Larapress\Profiles\Flags\UserFlags;
use Larapress\Pages\Models\PageSchema;
use Larapress\Profiles\IProfileUser;
use Larapress\Profiles\Repository\Form\IFormRepository;

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
        $jwtToken = null;
        /** @var  IProfileUser|ICRUDUser */
        $user = Auth::user();
        if (!$this->checkUserAccessToPage($user, $page)) {
            Session::put('endpoint', $request->path());
            return redirect(config('larapress.auth.redirects.login'));
        }

        if (!is_null($user) && BaseFlags::isActive($user->flags, UserFlags::BANNED)) {
            if ($request->path() != 'signin') {
                return redirect(config('larapress.auth.redirects.login'));
            }
        }

        $sources = $this->collectPageSourcesForUser($user, $request, $route, $page);
        [$channels, $permissions] = $this->collectPageChannelsAndPermissionsForUser($user);
        [$currentCart, $balance] = is_null($user) ? [null, null] : $this->collectPageUserECommerce($user, $request);
        if (!is_null($user)) {
            $jwtToken = auth()->guard('api')->tokenById($user->id);
            $user['roles'] = [$user->getUserHighestRole()];
            $user['permissions'] = $permissions;
            $user['current_cart'] = $currentCart;
            // make sure user profile ise loaded if exists
            $user->makeVisible('profile');
            // make sure support user is loaded
            $support = $user->supportUserProfile;
            $user['support'] = isset($support['data']['values']) ? $support['data']['values'] : null;
            $user['notifications'] = $user->unseen_notifications;
            $user['phones'] = $user->phones;
        }

        $this->reportPageEvents($user, $request, $route, $page);

        $locale = app()->getLocale();
        $langs = config('larapress.pages.languages');
        $lang = $langs[0];
        foreach ($langs as $ll) {
            if ($ll['id'] === $locale) {
                $lang = $ll;
                break;
            }
        }
        return [
            'user' => $user,
            'tokens' => [
                'api' => $jwtToken
            ],
            'title' => isset($page->options['title']) ? $page->options['title'] : config('larapress.pages.default-title'),
            'body' => $page->body,
            'options' => $page->options,
            'theme' => PageSchema::find(1),
            'datetime' => [
                'timestamp' => Carbon::now()->format('Y-m-d H:i:s e'),
            ],
            'languages' => $langs,
            'language' => $lang,
            'sources' => $sources,
            'channels' => $channels,
            'currencies' => [
                config('larapress.ecommerce.banking.currency.id') => config('larapress.ecommerce.banking.currency.title')
            ]
        ];
    }

    protected function reportPageEvents($user, Request $request, Route $route, Page $page)
    {
        /** @var IDomainRepository */
        $domainRepo = app(IDomainRepository::class);
        $domain = $domainRepo->getRequestDomain($request);

        if (isset($page->options['report_visits']) && $page->options['report_visits']) {
            $filters = [];
            $pageFilterName = isset($page->options['report_filter']) ? $page->options['report_filter'] : null;
            $pageParameterName = isset($page->options['report_parameter']) ? $page->options['report_parameter'] : null;
            if (!is_null($pageFilterName) && !is_null($pageParameterName)) {
                $filters[$pageFilterName] = $route->parameter($pageParameterName);
            }

            PageVisitEvent::dispatch($user, $page->id, $domain, $request->ip(), time(), $filters);
        }
    }

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @param Page $page
     * @return void
     */
    protected function checkUserAccessToPage($user, Page $page)
    {
        if (isset($page->options['roles']) && count($page->options['roles']) > 0) {
            if (isset($page->options['roles'][0]['id'])) {
                $roles = collect($page->options['roles'])->pluck('id')->toArray();
            } else {
                $roles = isset($page->options['roles'][0]) ? $page->options['roles'] : array_keys($page->options['roles']);
            }
            if (count($roles) > 0) {
                if (is_null($user) || !$user->hasRole($roles)) {
                    return false;
                }
            }
        }
        if (isset($page->options['blocks']) && count($page->options['blocks']) > 0) {
            if (isset($page->options['blocks'][0]['id'])) {
                $roles = collect($page->options['blocks'])->pluck('id')->toArray();
            } else {
                $roles = isset($page->options['blocks'][0]) ? $page->options['blocks'] : array_keys($page->options['blocks']);
            }
            if (count($roles) > 0) {
                if (is_null($user) || $user->hasRole($roles)) {
                    return false;
                }
            }
        }
        if (isset($page->options['registerred']) && $page->options['registerred']) {
            return !is_null($user);
        }
        return true;
    }

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @param Request $request
     * @param Route $route
     * @param Page $page
     * @return void
     */
    protected function collectPageSourcesForUser($user, Request $request, Route $route, Page $page)
    {
        if (isset($page->options['sources']) && is_array($page->options['sources'])) {
            /** @var IFormRepository */
            $srcRepo = app(IFormRepository::class);
            return $srcRepo->getFormDataSources($user, $request, $route, $page->options['sources']);
        }

        return [];
    }

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @return void
     */
    protected function collectPageChannelsAndPermissionsForUser($user)
    {
        $channels = [];
        $userPermissions = [];
        if (!is_null($user)) {
            $userPermissions = [];
            if ($user->hasRole(array_merge(config('larapress.profiles.security.roles.super-role'), config('larapress.profiles.security.roles.affiliate')))) {
                $permissions = $user->getPermissions();
                $roleFolder = $user->hasRole(config('larapress.profiles.security.roles.affiliate')) ? ".".$user->id : '';
                foreach ($permissions as $permission) {
                    if (!in_array('crud.' . $permission[1], $channels)) {
                        $channels[] = ['name' => 'crud.' . $permission[1] .$roleFolder, 'access' => 'private']; // attach first part if permission string as name.verb
                        $userPermissions[] = $permission[1];
                    }
                }
            }
            $userPermissions = $userPermissions;
        }
        $channels[] = ['name' => 'website', 'access' => 'presence', 'auto' => true];

        return [$channels, $userPermissions];
    }

    /**
     * Undocumented function
     *
     * @param IProfileUser $user
     * @param Request $request
     * @return void
     */
    protected function collectPageUserECommerce(IProfileUser $user, Request $request)
    {
        if (!is_null($user)) {
            /** @var IBankingService */
            $cartService = app(IBankingService::class);
            // include carts and balance of current user
            $currentCart = $cartService->getPurchasingCart(
                $user,
                config('larapress.ecommerce.banking.currency.id')
            );
            $currentCart['items'] = $cartService->getPurchasingCartItems(
                $user,
                config('larapress.ecommerce.banking.currency.id')
            );
            $balance = [
                'amount' =>
                $cartService->getUserBalance(
                    $user,
                    config('larapress.ecommerce.banking.currency.id')
                ),
                'currency' => config('larapress.ecommerce.banking.currency'),
                'default_gateway' => config('larapress.ecommerce.banking.default_gateway'),
            ];

            return [$currentCart, $balance];
        }

        return [null, null];
    }
}
