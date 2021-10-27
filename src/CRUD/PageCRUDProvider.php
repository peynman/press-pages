<?php

namespace Larapress\Pages\CRUD;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Larapress\CRUD\Extend\Helpers;
use Larapress\CRUD\Services\CRUD\Traits\CRUDProviderTrait;
use Larapress\CRUD\Services\CRUD\ICRUDProvider;
use Larapress\CRUD\Services\CRUD\ICRUDVerb;
use Larapress\Pages\Controllers\PageController;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Services\Pages\Reports\PageVisitReport;

class PageCRUDProvider implements ICRUDProvider
{
    use CRUDProviderTrait;

    public $name_in_config = 'larapress.pages.routes.pages.name';
    public $model_in_config = 'larapress.pages.routes.pages.model';
    public $compositions_in_config = 'larapress.pages.routes.pages.compositions';

    public $createValidations = [
        'name' => 'required|string|unique:pages,name',
        'slug' => 'required|string',
        'body' => 'nullable|json_object',
        'flags' => 'nullable|numeric',
        'publish_at' => 'nullable|datetime_zoned',
        'unpublish_at' => 'nullable|datetime_zoned',
        'zorder' => 'nullable|numeric',
    ];
    public $updateValidations = [
        'name' => 'required|string|unique:pages,name',
        'slug' => 'required|string',
        'options' => 'required|json_object',
        'options.title' => 'required|string',
        'body' => 'nullable|json_object',
        'flags' => 'nullable|numeric',
        'publish_at' => 'nullable|datetime_zoned',
        'unpublish_at' => 'nullable|datetime_zoned',
        'zorder' => 'nullable|numeric',
    ];
    public $validSortColumns = [
        'id',
        'slug',
        'name',
        'flags',
        'zorder',
        'author_id',
        'publish_at',
        'unpublish_at',
        'updated_at',
        'created_at',
        'deleted_at',
    ];
    public $searchColumns = [
        'slug',
        'name'
    ];
    public $filterFields = [
        'name' => 'equals:name',
        'author' => 'equals:author_id',
        'updated_from' => 'after:updated_at',
        'updated_to' => 'before:updated_at',
    ];

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getPermissionVerbs(): array
    {
        return [
            ICRUDVerb::VIEW,
            ICRUDVerb::SHOW,
            ICRUDVerb::CREATE,
            ICRUDVerb::EDIT,
            ICRUDVerb::DELETE,
            ICRUDVerb::EDIT.'.roles' => [
                'methods' => ['POST'],
                'uses' => '\\'.PageController::class.'@updateRoles',
                'url' => config('larapress.pages.routes.pages.name').'/update-roles',
            ]
        ];
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getValidRelations(): array
    {
        return [
            'author' => config('larapress.crud.user.provider'),
        ];
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getReportSources(): array
    {
        return [
            PageVisitReport::NAME => PageVisitReport::class,
        ];
    }

    /**
     * Exclude current id in name unique request
     *
     * @param Request $request
     *
     * @return array
     */
    public function getUpdateRules(Request $request): array
    {
        $this->updateValidations['name'] .= ',' . $request->route('id');
        return $this->updateValidations;
    }

    /**
     * Undocumented function
     *
     * @param array $args
     *
     * @return array
     */
    public function onBeforeCreate(array $args): array
    {
        $args['author_id'] = Auth::user()->id;

        if (!Str::startsWith($args['slug'], '/')) {
            $args['slug'] = '/' . $args['slug'];
        }
        if (!isset($args['zorder'])) {
            $args['zorder'] = 0;
        }

        return $args;
    }

    /**
     * Undocumented function
     *
     * @param array $args
     *
     * @return array
     */
    public function onBeforeUpdate(array $args): array
    {
        if (isset($args['slug'])) {
            if (!Str::startsWith($args['slug'], '/')) {
                $args['slug'] = '/' . $args['slug'];
            }
        }
        if (!isset($args['zorder'])) {
            $args['zorder'] = 0;
        }

        return $args;
    }

    /**
     * @param Builder $query
     *
     * @return Builder
     */
    public function onBeforeQuery(Builder $query): Builder
    {
        /** @var ICRUDUser $user */
        $user = Auth::user();
        if (!$user->hasRole(config('larapress.profiles.security.roles.super_role'))) {
            $query->where('author_id', $user->id);
        }

        return $query;
    }

    /**
     * @param Page $object
     *
     * @return bool
     */
    public function onBeforeAccess($object): bool
    {
        /** @var IProfileUser $user */
        $user = Auth::user();
        if (!$user->hasRole(config('larapress.profiles.security.roles.super_role'))) {
            return $user->id === $object->author_id;
        }

        return true;
    }

    /**
     * Undocumented function
     *
     * @param Page $object
     * @param array $input_data
     *
     * @return void
     */
    public function onAfterCreate($object, array $input_data): void
    {
        Helpers::forgetCachedValues(['pages']);
    }

    /**
     * Undocumented function
     *
     * @param Page $object
     * @param array $input_data
     *
     * @return void
     */
    public function onAfterUpdate($object, array $input_data): void
    {
        Helpers::forgetCachedValues(['pages']);
    }
}
