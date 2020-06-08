<?php

namespace Larapress\Pages\Controllers;

use Larapress\CRUD\CRUDControllers\BaseCRUDController;
use Larapress\Pages\CRUD\PageSchemaCRUDProvider;
use Larapress\Pages\Models\PageSchema;

class PageSchemaController extends BaseCRUDController
{
    public static function registerRoutes() {
        $name = config('larapress.pages.routes.page-schemas.name');
        $class = self::class;

        self::registerCrudRoutes(
            $name,
            $class,
            PageSchemaCRUDProvider::class,
            [
                'query.name' => [
                    'methods' => ['GET'],
                    'url' => $name.'/name/{name}',
                    'uses' => '\\'.$class.'@named',
                ],
            ]
        );
    }

    /**
     * Custom CRUD verb
     * Show Page Schema with name
     *
     * @param String $name
     * @return void
     */
    public function named(String $name) {
        return PageSchema::where('name', $name)->first();
    }
}
