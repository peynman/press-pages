<?php

namespace Larapress\Pages\Services;

use Carbon\Carbon;
use Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Larapress\CRUD\Translation\TranslationHelper;
use Larapress\Pages\Models\Page;
use Larapress\CRUD\ICRUDUser;
use Larapress\Profiles\Repository\Domain\IDomainRepository;
use Illuminate\Routing\Route;
use Larapress\CRUD\Services\ICRUDService;
use Larapress\ECommerce\Services\Banking\IBankingService;
use Mews\Captcha\Facades\Captcha;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;
use Larapress\Notifications\Models\Notification;
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
        $lang = TranslationHelper::getLocaleLanguage(app()->getLocale());
        $jwtToken = null;
        /** @var  IProfileUser|ICRUDUser */
        $user = Auth::user();
        if (!$this->checkUserAccessToPage($user, $page)) {
            Session::put('endpoint', $request->path());
            return redirect('/signin');
        }

        $sources = $this->collectPageSourcesForUser($user, $request, $route, $page);
        [$channels, $permissions] = $this->collectPageChannelsAndPermissionsForUser($user);
        [$currentCart, $balance] = $this->collectPageUserECommerce($user, $request);
        if (!is_null($user)) {
            $jwtToken = auth()->guard('api')->tokenById($user->id);
            $user['permissions'] = $permissions;
            $user['current_cart'] = $currentCart;
            $user['balance'] = $balance;
            // make sure user profile ise loaded if exists
            $user->makeVisible('profile');
            // make sure support user is loaded
            $support = $user->supportUserProfile;

            $user['support'] = isset($support['data']['values']) ? $support['data']['values'] : null;
            $user['notifications'] = $user->unseen_notifications;
        }

        $this->reportPageEvents($user, $request, $route, $page);

        return [
            'user' => $user,
            'tokens' => [
                'api' => $jwtToken
            ],
            'title' => isset($page->options['title']) ? $page->options['title'] : config('larapress.pages.default-title'),
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
        if (isset($page->options['roles']) && isset($page->options['roles'])) {
            if (isset($page->options['roles'][0]['id'])) {
                $roles = collect($page->options['roles'])->pluck('id')->toArray();
            } else {
                $roles = array_keys($page->options['roles']);
            }
            if (count($roles) > 0) {
                if (is_null($user) || !$user->hasRole($roles)) {
                    return false;
                }
            }
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
                foreach ($permissions as $permission) {
                    if (!in_array('crud.' . $permission[1], $channels)) {
                        $channels[] = ['name' => 'crud.' . $permission[1], 'access' => 'private']; // attach first part if permission string as name.verb
                        $userPermissions[] = $permission[1];
                    }
                }
            }
            $channels[] = ['name' => 'users', 'access' => 'presence'];
            $userPermissions = $userPermissions;
        }

        return [$channels, $userPermissions];
    }

    /**
     * Undocumented function
     *
     * @param [type] $user
     * @param Request $request
     * @return void
     */
    protected function collectPageUserECommerce($user, Request $request)
    {
        if (!is_null($user)) {
            /** @var IBankingService */
            $cartService = app(IBankingService::class);
            /** @var IDomainRepository */
            $domainRepo = app(IDomainRepository::class);
            $domain = $domainRepo->getRequestDomain($request);
            // include carts and balance of current user
            $currentCart = $cartService->getPurchasingCart(
                $user,
                $domain,
                config('larapress.ecommerce.banking.currency.id')
            );
            $currentCart['items'] = $cartService->getPurchasingCartItems(
                $user,
                $domain,
                config('larapress.ecommerce.banking.currency.id')
            );
            $balance = [
                'amount' =>
                $cartService->getUserBalance(
                    $user,
                    $domain,
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
