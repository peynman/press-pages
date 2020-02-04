<?php

namespace Larapress\Pages\CRUDControllers;

use Larapress\CRUD\CRUDControllers\BaseCRUDController;
use Larapress\Pages\CRUD\PageCRUDProvider;

class PageController extends BaseCRUDController
{
    public static function registerRoutes() {
        self::registerCrudRoutes(
            config('larapress.pages.routes.pages.name'),
            self::class,
            PageCRUDProvider::class
        );
    }
}