<?php

namespace Larapress\Pages\Services\Pages;

use Illuminate\Support\Facades\DB;
use Larapress\Pages\Services\Pages\Requests\UpdateRolesRequest;

class PageService implements IPageService {
    /**
     * Undocumented function
     *
     * @param UpdateRolesRequest $request
     * @return Response
     */
    public function updateRolesForPages(UpdateRolesRequest $request) {
        $roleIds = $request->getRoleIds();
        $pageIds = $request->getPageIds();

        switch ($request->getMode()) {
            case 'add':
                foreach ($roleIds as $roleId) {
                    DB::table('pages')->whereIn('id', $pageIds)->update([
                        'options' => DB::raw("JSON_SET(JSON_MERGE(`options`, '{\"roles\":{}}'), '$.roles.$roleId', JSON_OBJECT('id', $roleId))"),
                    ]);
                }
            break;
            case 'remove':
                foreach ($roleIds as $roleId) {
                    DB::table('pages')->whereIn('id', $pageIds)->update([
                        'options' => DB::raw("JSON_REMOVE(`options`, '$.roles.$roleId')"),
                    ]);
                }
            break;
            case 'sync':
                foreach ($roleIds as $roleId) {
                    $rolesjson = [];
                    foreach ($roleIds as $roleId) {
                        $rolesjson[] = $roleId.',JSON_OBJECT("id", '.$roleId.')';
                    }
                    DB::table('pages')->whereIn('id', $pageIds)->update([
                        'options' => DB::raw("JSON_SET(`options`, '$.roles', JSON_OBJECT(".implode(',', $rolesjson)."))"),
                    ]);
                }
            break;

        }

        return ['message' => 'Success'];
    }
}
