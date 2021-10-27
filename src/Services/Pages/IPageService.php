<?php

namespace Larapress\Pages\Services\Pages;

use Larapress\Pages\Services\Pages\Requests\UpdateRolesRequest;
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
