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
            PageSchemaCRUDProvider::class
        );
    }
}
