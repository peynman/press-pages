<?php

namespace Larapress\Pages\Controllers;

use Larapress\CRUD\Services\CRUD\CRUDController;
use Larapress\Pages\Services\IPageService;
use Larapress\Pages\Services\UpdateRoles\UpdateRolesRequest;

/**
 * Standard CRUD controller for Page resource.
 *
 * @group Page Management
 */
class PageController extends CRUDController
{
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
