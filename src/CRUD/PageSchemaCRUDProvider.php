<?php

namespace Larapress\Pages\CRUD;

use Illuminate\Support\Facades\Auth;
use Larapress\CRUD\Base\BaseCRUDProvider;
use Larapress\CRUD\Base\ICRUDProvider;
use Larapress\Pages\Models\PageSchema;

class PageSchemaCRUDProvider implements ICRUDProvider
{
    use BaseCRUDProvider;

    public $model = PageSchema::class;
    public $createValidations = [
        'name' => 'required|string|unique:page_schemas,name',
        'schema' => 'nullable',
        'flags' => 'nullable|numeric',
        'publish_at' => 'nullable|datetime_zoned',
        'unpublish_at' => 'nullable|datetime_zoned',
    ];
    public $updateValidations = [
        'name' => 'nullable|string|unique:page_schemas,name',
        'schema' => 'nullable',
        'flags' => 'nullable|numeric',
        'publish_at' => 'nullable|datetime_zoned',
        'unpublish_at' => 'nullable|datetime_zoned',
    ];
    public $autoSyncRelations = [];
    public $validSortColumns = [
        'name',
        'author_id',
        'publish_at',
        'unpublish_at',
        'flags',
    ];
    public $validRelations = ['author'];
    public $validFilters = [];
    public $defaultShowRelations = ['author'];
    public $excludeFromUpdate = [];
    public $searchColumns = ['schema', 'name'];
    public $filterFields = [];
    public $filterDefaults = [];

    /**
     * Undocumented function
     *
     * @param [type] $args
     * @return void
     */
    public function onBeforeCreate( $args )
    {
        $args['author_id'] = Auth::user()->id;

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
        if ($user->hasRole(config('larapress.profiles.security.roles.affiliate'))) {
            $query->where('author_id', $user->id);
        }

        return $query;
    }

    /**
     * @param PageSchema $object
     *
     * @return bool
     */
    public function onBeforeAccess($object)
    {
        /** @var ICRUDUser|IProfileUser $user */
        $user = Auth::user();
        if ($user->hasRole(config('larapress.profiles.security.roles.affiliate'))) {
            return $user->id === $object->author_id;
        }

        return true;
    }
}
