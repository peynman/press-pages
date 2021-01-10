<?php

namespace Larapress\Pages\CRUD;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Larapress\CRUD\Services\BaseCRUDProvider;
use Larapress\CRUD\Services\ICRUDProvider;
use Larapress\CRUD\Services\IPermissionsMetadata;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Services\PageVisitReport;
use Larapress\Reports\Services\IReportsService;

class PageCRUDProvider implements ICRUDProvider, IPermissionsMetadata
{
    use BaseCRUDProvider;

    public $name_in_config = 'larapress.pages.routes.pages.name';
    public $verbs = [
        self::VIEW,
        self::CREATE,
        self::EDIT,
        self::DELETE,
        self::REPORTS,
    ];
    public $model = Page::class;
    public $createValidations = [
        'name' => 'required|string|unique:pages,name',
        'slug' => 'required|string',
        'body' => 'nullable',
        'options.title' => 'required|string',
        'flags' => 'nullable|numeric',
        'publish_at' => 'nullable|datetime_zoned',
        'unpublish_at' => 'nullable|datetime_zoned',
        'zorder' => 'nullable|numeric',
    ];
    public $updateValidations = [
        'name' => 'nullable|string|unique:pages,name',
        'slug' => 'nullable|string',
        'body' => 'nullable',
        'options.title' => 'required|string',
        'flags' => 'nullable|numeric',
        'publish_at' => 'nullable|datetime_zoned',
        'unpublish_at' => 'nullable|datetime_zoned',
        'zorder' => 'nullable|numeric',
    ];
    public $autoSyncRelations = [];
    public $validSortColumns = [
        'id',
        'slug',
        'name',
        'author_id',
        'publish_at',
        'unpublish_at',
        'updated_at',
        'created_at',
        'flags',
        'zorder',
    ];
    public $validRelations = ['author'];
    public $validFilters = [];
    public $defaultShowRelations = ['author'];
    public $excludeIfNull = [
        'zorder',
        'flags',
    ];
    public $searchColumns = ['slug', 'name'];
    public $filterFields = [];
    public $filterDefaults = [];

    /**
     *
     */
    public function getReportSources()
    {
        /** @var IReportsService */
        $service = app(IReportsService::class);
        return [
            new PageVisitReport($service),
        ];
    }

    /**
     * Exclude current id in name unique request
     *
     * @param Request $request
     * @return void
     */
    public function getUpdateRules(Request $request) {
        $this->updateValidations['name'] .= ',' . $request->route('id');
        return $this->updateValidations;
    }

    /**
     * Undocumented function
     *
     * @param [type] $args
     * @return void
     */
    public function onBeforeCreate( $args )
    {
        $args['author_id'] = Auth::user()->id;

        if (!Str::startsWith($args['slug'], '/')) {
            $args['slug'] = '/'.$args['slug'];
        }

        return $args;
    }

    /**
     * Undocumented function
     *
     * @param [type] $args
     * @return void
     */
    public function onBeforeUpdate( $args )
    {
        if (isset($args['slug'])) {
            if (!Str::startsWith($args['slug'], '/')) {
                $args['slug'] = '/'.$args['slug'];
            }
        }

        return $args;
    }

    /**
     * @param Builder $query
     *
     * @return \Illuminate\Database\Query\Builder
     */
    public function onBeforeQuery($query)
    {
        /** @var ICRUDUser $user */
        $user = Auth::user();
        if (! $user->hasRole(config('larapress.profiles.security.roles.super-role'))) {
            $query->where('author_id', $user->id);
        }

        return $query;
    }

    /**
     * @param Page $object
     *
     * @return bool
     */
    public function onBeforeAccess($object)
    {
        /** @var ICRUDUser|IProfileUser $user */
        $user = Auth::user();
        if (! $user->hasRole(config('larapress.profiles.security.roles.super-role'))) {
            return $user->id === $object->author_id;
        }

        return true;
    }

    public function onAfterCreate($object, $input_data)
    {
        Cache::tags(['pages'])->flush();
    }

    public function onAfterUpdate($object, $input_data)
    {
        Cache::tags(['pages'])->flush();
    }
}
