<?php

namespace Larapress\Pages\Services\Pages;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Larapress\Pages\Models\Page;
use Larapress\Profiles\Repository\Domain\IDomainRepository;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Session;
use Larapress\CRUD\BaseFlags;
use Larapress\Profiles\Flags\UserFlags;
use Larapress\Pages\Models\PageSchema;
use Larapress\Profiles\IProfileUser;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Larapress\CRUD\Extend\Helpers;
use Larapress\CRUD\Services\RepoSources\IRepositorySources;
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
     * @param Request $request
     * @param Route $route
     * @param Page $page
     *
     * @return \Illuminate\Http\Response|string|\Illuminate\View\View
     */
    public function renderPageHTML(Request $request, Route $route, Page $page)
    {
        $json = $this->renderPageJSON($request, $route, $page);
        return view($json['view'], [
            'config' => $json
        ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \Larapress\Pages\Models\Page $page
     * @param \Larapress\Pages\Models\PageSchema $schema
     * @return array
     */
    public function renderPageJSON(Request $request, Route $route, Page $page)
    {
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

        $jwtToken = null;
        if (!is_null($user)) {
            /** @var JWTGuard */
            $jwtGuard = auth()->guard('api');
            if ($jwtGuard instanceof JWTGuard) {
                $jwtToken = $jwtGuard->tokenById($user->id);
            }
        }

        $sources = $this->collectPageSourcesForUser($user, $request, $route, $page);
        $channels = $this->collectPageChannelsAndPermissionsForUser($user);

        $locale = app()->getLocale();
        $langs = Collection::make(config('larapress.pages.languages'));
        $locale = $langs->first(function ($lang) use ($locale) {
            return $lang['id'] === $locale;
        });


        $routeName = $route->getName();
        $renderMeta = config('larapress.pages.render.' . $routeName, []);
        $title = $renderMeta['title'] ?? null;
        $author = $page->options['author'] ?? $renderMeta['author'] ?? null;
        $desc = $page->options['description'] ?? $renderMeta['description'] ?? null;
        $schema = $page->options['schemaId'] ?? $renderMeta['schema'] ?? null;
        $metas = $renderMeta['metas'] ?? [];
        $view = $renderMeta['view'] ?? null;

        if (isset($page->options['metas']) && is_array($page->options['metas'])) {
            $metas = array_merge($metas, $page->options['metas']);
        }
        if (!is_null($schema)) {
            $schema = PageSchema::find($schema);
        }

        $this->reportPageVisit($user, $request, $route, $page);

        return [
            'token' => $jwtToken,
            'view' => $view,
            'page' => $page->toArray(),
            'schema' => $schema?->toArray() ?? [],
            'metas' => [
                'title' => $title,
                'author' => $author,
                'description' => $desc,
                'extra' => $metas,
            ],
            'user' => $user?->toArray(),
            'langs' => $langs,
            'language' => $locale,
            'sources' => $sources,
            'channels' => $channels,
        ];
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return array
     */
    public function getDefaultConfig(Request $request): array
    {
        /** @var  IProfileUser|Model */
        $user = Auth::user();

        $jwtToken = null;
        if (!is_null($user)) {
            /** @var JWTGuard */
            $jwtGuard = auth()->guard('api');
            if ($jwtGuard instanceof JWTGuard) {
                $jwtToken = $jwtGuard->tokenById($user->id);
            }
        }

        $channels = $this->collectPageChannelsAndPermissionsForUser($user);

        $locale = app()->getLocale();
        $langs = Collection::make(config('larapress.pages.languages'));
        $locale = $langs->first(function ($lang) use ($locale) {
            return $lang['id'] === $locale;
        });

        $defaultMeta = current(array_filter(
            array_values(config('larapress.pages.render', [])),
            function ($r) {
                return $r['default'] ?? false;
            }
        ));

        $title = $defaultMeta['title'] ?? null;
        $author = $defaultMeta['author'] ?? null;
        $desc = $defaultMeta['description'] ?? null;
        $metas = $defaultMeta['metas'] ?? [];
        $schema = $defaultMeta['schema'] ?? null;

        if (!is_null($schema)) {
            $schema = PageSchema::find($schema);
        }

        return [
            'token' => $jwtToken,
            'page' => null,
            'schema' => $schema?->toArray() ?? [],
            'metas' => [
                'title' => $title,
                'author' => $author,
                'description' => $desc,
                'extra' => $metas,
            ],
            'user' => $user?->toArray(),
            'langs' => $langs,
            'language' => $locale,
            'sources' => [],
            'channels' => $channels,
        ];
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
    public function reportPageVisit($user, Request $request, $route, $page)
    {
        if (isset($page->options['report_visits']) && $page->options['report_visits']) {
            /** @var IDomainRepository */
            $domainRepo = app(IDomainRepository::class);
            $domain = $domainRepo->getRequestDomain($request);

            $filters = [];
            if (!is_null($route) && !is_null($page)) {
                $pageFilterName = isset($page->options['report_filter']) ? $page->options['report_filter'] : null;
                $pageParameterName = isset($page->options['report_parameter']) ? $page->options['report_parameter'] : null;
                if (!is_null($pageFilterName) && !is_null($pageParameterName)) {
                    $filters[$pageFilterName] = $route->parameter($pageParameterName);
                }
            }
            PageVisitEvent::dispatch(
                $user,
                $page?->id ?? null,
                $domain,
                $request,
                time(),
                $filters
            );
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
     * @param [type] $user
     * @param Request $request
     * @param Route $route
     * @param Page $page
     * @return void
     */
    protected function collectPageSourcesForUser($user, Request $request, Route $route, Page $page)
    {
        if (isset($page->options['sources']) && is_array($page->options['sources'])) {
            /** @var IRepositorySources */
            $srcRepo = app(IRepositorySources::class);
            return $srcRepo->fetchRepositorySources($user, $request, $route, $page->options['sources']);
        }

        return [];
    }
}
