<?php

namespace Larapress\Pages\Services;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Larapress\Pages\Models\Page;
use Larapress\Pages\Services\UpdateRoles\UpdateRolesRequest;
use Illuminate\Http\Response;

interface IPageService
{
    /**
     * Undocumented function
     *
     * @param UpdateRolesRequest $request
     * @return Response
     */
    public function updateRolesForPages(UpdateRolesRequest $request);
}
