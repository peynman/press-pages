<?php

namespace Larapress\Pages\CRUDRenderControllers;

use Larapress\CRUDRender\Base\BaseCRUDRenderController;
use Larapress\CRUDRender\Base\ICRUDRenderProvider;
use Larapress\Pages\CRUD\PageCRUDProvider;
use Larapress\Pages\Metadata\PageMetadata;

class PageRenderController extends BaseCRUDRenderController
{
    public static function registerRoutes()
    {
        parent::registerRenderRoutes(
            config('larapress.pages.routes.pages.name'),
            self::class,
            PageCRUDProvider::class,
            ICRUDRenderProvider::class,
            PageMetadata::class
        );
    }
}