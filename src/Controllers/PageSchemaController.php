<?php

namespace Larapress\Pages\Controllers;

use Larapress\CRUD\Services\CRUD\CRUDController;
use Larapress\Pages\CRUD\PageSchemaCRUDProvider;
use Larapress\Pages\Models\PageSchema;

/**
 * Standard CRUD Controller for Page Schema resource.
 *
 * @group Page Schemas
 */
class PageSchemaController extends CRUDController
{
    public static function registerRoutes() {
        self::registerCrudRoutes(
            config('larapress.pages.routes.page_schemas.name'),
            self::class,
            config('larapress.pages.routes.page_schemas.provider'),
        );
    }
}
