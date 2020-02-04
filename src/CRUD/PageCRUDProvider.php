<?php

namespace Larapress\Pages\CRUD;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Larapress\Core\Extend\Helpers;
use Larapress\CRUD\Base\BaseCRUDProvider;
use Larapress\CRUD\Base\ICRUDProvider;
use Larapress\Pages\Models\Page;

class PageCRUDProvider implements ICRUDProvider
{
    use BaseCRUDProvider;

    public $model = Page::class;
    public $createValidations = [
        'title' => 'required|string|max:190',
        'slug' => 'required|string|max:190',
        'domain_id' => 'nullable|numeric|exists:domains,id',
        'template' => 'nullable|string',
        'content' => 'nullable|string|json',
        'publish_at' => 'nullable|datetime_jalali',
        'unpublish_at' => 'nullable|datetime_jalali',
        'schema_id' => 'nullable|exists:page_schemas,id',
    ];
    public $updateValidations = [
        'title' => 'required|string|max:190',
        'template' => 'nullable|string',
        'domain_id' => 'nullable|numeric|exists:domains,id',
        'content' => 'nullable|string|json',
        'schema_id' => 'nullable|exists:page_schemas,id',
        'publish_at' => 'nullable|datetime_jalali',
        'unpublish_at' => 'nullable|datetime_jalali',
    ];
    public $autoSyncRelations = [];
    public $validSortColumns = ['id', 'slug', 'title', 'created_at'];
    public $validRelations = ['author', 'sub_domain'];
    public $validFilters = [];
    public $defaultShowRelations = ['author', 'sub_domain'];
    public $excludeFromUpdate = [];
    public $searchColumns = ['title', 'slug', 'content', 'slug'];
    public $filterFields = [];
    public $filterDefaults = [];

    public function onBeforeCreate( $args )
    {
        $args = Helpers::processDateTime($args, 'publish_at');
        $args = Helpers::processDateTime($args, 'unpublish_at');

        $args['author_id'] = Auth::user()->id;

        if (!isset($args['flags'])) {
            $args['flags'] = 0;
        }

        if (!Str::startsWith($args['slug'], '/')) {
            $args['slug'] = '/'.$args['slug'];
        }

        if (isset($args['content'])) {
            $args['content'] = json_decode($args['content']);
        }

        return $args;
    }

    public function onBeforeUpdate( $args )
    {
        $args = Helpers::processDateTime($args, 'publish_at');
        $args = Helpers::processDateTime($args, 'unpublish_at');

        if (isset($args['content'])) {
            $args['content'] = json_decode($args['content']);
        }

        if (isset($args['slug'])) {
            unset($args['slug']);
        }

        return $args;
    }

    /**
     * @param Page $object
     *
     * @return bool
     */
    public function onBeforeAccess( $object )
    {
        /** @var \Larapress\CRUD\ICRUDUser $user */
        $user = Auth::user();
        if ($user->hasRole(config('bet.affiliate.role_name'))) {
            return $user->id === $object->author_id;
        }

        return true;
    }
}