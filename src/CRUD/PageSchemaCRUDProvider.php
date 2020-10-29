<?php

namespace Larapress\Pages\CRUD;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Larapress\CRUD\Services\BaseCRUDProvider;
use Larapress\CRUD\Services\ICRUDProvider;
use Larapress\CRUD\Services\IPermissionsMetadata;
use Larapress\Pages\Models\PageSchema;

class PageSchemaCRUDProvider implements ICRUDProvider, IPermissionsMetadata
{
    use BaseCRUDProvider;

    public $name_in_config = 'larapress.pages.routes.page-schemas.name';
    public $verbs = [
        self::VIEW,
        self::CREATE,
        self::EDIT,
        self::DELETE,
    ];
    public $model = PageSchema::class;
    public $createValidations = [
        'name' => 'required|string|unique:page_schemas,name',
        'schema' => 'nullable',
        'flags' => 'nullable|numeric',
    ];
    public $updateValidations = [
        'name' => 'nullable|string|unique:page_schemas,name',
        'schema' => 'nullable',
        'flags' => 'nullable|numeric',
    ];
    public $validSortColumns = [
        'id',
        'name',
        'author_id',
        'flags',
    ];
    public $validRelations = [
        'author'
    ];
    public $defaultShowRelations = [
        'author'
    ];
    public $searchColumns = [
        'name'
    ];


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
