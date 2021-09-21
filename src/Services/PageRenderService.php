<?php

namespace Larapress\Pages\Services;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Larapress\Pages\Models\Page;
use Larapress\Profiles\Repository\Domain\IDomainRepository;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Session;
use Larapress\CRUD\BaseFlags;
use Larapress\ECommerce\Services\Cart\IPurchasingCartService;
use Larapress\ECommerce\Services\Wallet\IWalletService;
use Larapress\Profiles\Flags\UserFlags;
use Larapress\Pages\Models\PageSchema;
use Larapress\Profiles\IProfileUser;
use Illuminate\Database\Eloquent\Model;
use Larapress\CRUD\Extend\Helpers;
use Larapress\ECommerce\IECommerceUser;
use Larapress\Profiles\Repository\Form\IFormRepository;
use Tymon\JWTAuth\JWTGuard;

class PageRenderService implements IPageRenderService
{

    /**
     * @param int $pageId
     *
     * @return Page
     */
    public function findPage($pageId)
    {
        return Helpers::getCachedValue(
            'larapress.pages.cached.' . $pageId,
            ['pages'],
            3600,
            false,
            function () use ($pageId) {
                return Page::find($pageId);
            },
        );
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
            return view(config('larapress.pages.page_settings.blade'), [
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
        /** @var  IProfileUser|Model */
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
        $channels = $this->collectPageChannelsAndPermissionsForUser($user);
        if (!is_null($user)) {
            /** @var JWTGuard */
            $jwtGuard = auth()->guard('api');
            $jwtToken = $jwtGuard->tokenById($user->id);
            $user = $this->getUserDetails($user);
        }

        $this->reportPageEvents($user, $request, $route, $page);

        $locale = app()->getLocale();
        $langs = config('larapress.pages.languages');
        $lang = $langs[0];

        $schema = isset($page->options['schema']) ? $page->options['schema'] : config('larapress.pages.page_settings.schema');
        if (!is_null($schema)) {
            $schema = PageSchema::find($schema);
        }

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
            'theme' => $schema,
            'datetime' => [
                'timestamp' => Carbon::now()->format('Y-m-d H:i:s e'),
            ],
            'languages' => $langs,
            'language' => $lang,
            'sources' => $sources,
            'channels' => $channels,
            'metas' => [
                'description' => isset($page->options['metas']['description']) ? $page->options['metas']['description'] : config('larapress.pages.page_settings.description', ''),
                'author' => isset($page->options['metas']['author']) ? $page->options['metas']['author'] : config('larapress.pages.page_settings.author', ''),
                'extra' => isset($page->options['metas']['extra']) ? $page->options['metas']['extra'] : config('larapress.pages.page_settings.extra-metas', []),
            ]
        ];
    }

    public function getUserDetails(IProfileUser $user)
    {
        return Helpers::getCachedValue(
            'larapress.pages.user.' . $user->id,
            [
                'user.page:' . $user->id,
                'user.wallet:' . $user->id,
                'purchasing-cart:' . $user->id,
                'purchased-cart:' . $user->id,
            ],
            86400,
            false,
            function () use ($user) {
                if (!is_null($user)) {
                    [$currentCart, $balance] = $this->collectPageUserECommerce($user);
                    $user['roles'] = [$user->getUserHighestRole()];
                    $user['permissions'] = $user->getPermissions();
                    $user['current_cart'] = $currentCart;
                    // make sure user profile ise loaded if exists
                    /** @var Model $user */
                    $user->makeVisible('profile');
                    // make sure support user is loaded
                    $support = $user->supportUserProfile;
                    $user['support'] = isset($support['data']['values']) ? $support['data']['values'] : null;
                    $user['notifications'] = $user->unseen_notifications;
                    $user['phones'] = $user->phones;
                    $user['balance'] = $balance;

                    return $user;
                }
            },
        );
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @param [type] $sources
     * @return \Illuminate\Http\Response|string
     */
    public function renderRepositories(Request $request, $sources)
    {
        /** @var IFormRepository */
        $srcRepo = app(IFormRepository::class);
        return $srcRepo->getFormDataSources(Auth::user(), $request, null, $sources);
    }

    /**
     * Undocumented function
     *
     * @param null|IProfileUser $user
     * @param Request $request
     * @param Route $route
     * @param Page $page
     *
     * @return void
     */
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
     * @param null|IProfileUser $user
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
        if (!is_null($user)) {
            if ($user->hasRole(array_merge(config('larapress.profiles.security.roles.super_role'), config('larapress.profiles.security.roles.affiliate')))) {
                $permissions = $user->getPermissions();
                $roleFolder = $user->hasRole(config('larapress.profiles.security.roles.affiliate')) ? "." . $user->id : '';
                foreach ($permissions as $permission) {
                    if (!in_array('crud.' . $permission['name'], $channels)) {
                        $channels[] = ['name' => 'crud.' . $permission['name'] . $roleFolder, 'access' => 'private']; // attach first part if permission string as name.verb
                    }
                }
            }
        }
        $channels[] = ['name' => 'website', 'access' => 'presence', 'auto' => true];

        return $channels;
    }

    /**
     * Undocumented function
     *
     * @param IProfileUser $user
     * @param Request $request
     * @return void
     */
    protected function collectPageUserECommerce(IProfileUser $user)
    {
        if (!is_null($user)) {
            /** @var IWalletService */
            $walletService = app(IWalletService::class);
            /** @var IPurchasingCartService */
            $cartService = app(IPurchasingCartService::class);
            // include carts and balance of current user
            $currentCart = $cartService->getPurchasingCart(
                $user,
                config('larapress.ecommerce.banking.currency.id')
            );
            $currentCart['items'] = $currentCart->products;
            $balance = [
                'amount' =>
                $walletService->getUserBalance(
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
