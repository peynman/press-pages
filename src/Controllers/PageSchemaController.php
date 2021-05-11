<?php

namespace Larapress\Pages\Controllers;

use Larapress\CRUD\Services\CRUD\BaseCRUDController;
use Larapress\Pages\CRUD\PageSchemaCRUDProvider;
use Larapress\Pages\Models\PageSchema;

/**
 * Standard CRUD Controller for Page Schema resource.
 *
 * @group Page Schemas
 */
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
