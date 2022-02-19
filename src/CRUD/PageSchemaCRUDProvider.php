<?php

namespace Larapress\Pages\CRUD;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Larapress\CRUD\Services\CRUD\Traits\CRUDProviderTrait;
use Larapress\CRUD\Services\CRUD\ICRUDProvider;
use Larapress\CRUD\Services\CRUD\ICRUDVerb;
use Larapress\Pages\Models\PageSchema;

class PageSchemaCRUDProvider implements ICRUDProvider
{
    use CRUDProviderTrait;

    public $name_in_config = 'larapress.pages.routes.page_schemas.name';
    public $model_in_config = 'larapress.pages.routes.page_schemas.model';
    public $compositions_in_config = 'larapress.pages.routes.page_schemas.compositions';

    public $verbs = [
        ICRUDVerb::VIEW,
        ICRUDVerb::SHOW,
        ICRUDVerb::CREATE,
        ICRUDVerb::EDIT,
        ICRUDVerb::DELETE,
    ];
    public $createValidations = [
        'name' => 'required|string|unique:page_schemas,name',
        'schema' => 'nullable|json_object',
        'flags' => 'nullable|numeric',
    ];
    public $updateValidations = [
        'name' => 'nullable|string|unique:page_schemas,name',
        'schema' => 'nullable|json_object',
        'flags' => 'nullable|numeric',
    ];
    public $validSortColumns = [
        'id',
        'name',
        'author_id',
        'flags',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    public $searchColumns = [
        'name'
    ];

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
     * Exclude current id in name unique request
     *
     * @param Request $request
     *
     * @return array
     */
    public function getUpdateRules(Request $request): array
    {
        $this->updateValidations['name'] .= ',' . $request->route('id') . ',id,deleted_at,NULL';
        return $this->updateValidations;
    }

    /**
     * Undocumented function
     *
     * @param array $args
     * @return array
     */
    public function onBeforeCreate(array $args): array
    {
        $args['author_id'] = Auth::user()->id;

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
    public function onBeforeAccess($object): bool
    {
        /** @var ICRUDUser|IProfileUser $user */
        $user = Auth::user();
        if ($user->hasRole(config('larapress.profiles.security.roles.affiliate'))) {
            return $user->id === $object->author_id;
        }

        return true;
    }
}
