<?php

namespace Larapress\Pages\Controllers;

use Larapress\CRUD\CRUDControllers\BaseCRUDController;
use Larapress\Pages\CRUD\PageCRUDProvider;
use Larapress\Pages\Services\IPageService;
use Larapress\Pages\Services\UpdateRoles\UpdateRolesRequest;

/**
 * @group Page management
 *
 * Standard CRUD controller for Page resources in databaase.
 */
class PageController extends BaseCRUDController
{
    public static function registerRoutes() {
        self::registerCrudRoutes(
            config('larapress.pages.routes.pages.name'),
            self::class,
            PageCRUDProvider::class,
            [
                'edit.update_roles' => [
                    'methods' => ['POST'],
                    'uses' => '\\'.self::class.'@updateRoles',
                    'url' => config('larapress.pages.routes.pages.name').'/update-roles',
                ]
            ]
        );
    }

    /**
     * Update roles that can access a page
     *
     * @authenticated
     *
     * @param IPageService $service
     * @param UpdateRolesRequest $request
     * @return Response
     */
    public function updateRoles(IPageService $service, UpdateRolesRequest $request) {
        return $service->updateRolesForPages($request);
    }
}
