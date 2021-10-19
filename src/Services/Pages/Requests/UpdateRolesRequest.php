<?php

namespace Larapress\Pages\Services\Pages\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Collection;

/**
 * @bodyParam mode string required One of (add,remove,sync)
 * @bodyParam roles[].id int required Role ids to (add,remove,sync)
 * @bodyParam pages int[] required Page ids to update
 */
class UpdateRolesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mode' => 'required|in:add,remove,sync',
            'roles.*' => 'required|exists:roles,id',
            'pages.*' => 'required|exists:pages,id',
        ];
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getRoleIds() {
        return $this->get('roles', []);
    }

    /**
     * Undocumented function
     *
     * @return array
     */
    public function getPageIds() {
        return $this->get('pages', []);
    }

    /**
     * Undocumented function
     *
     * @return string
     */
    public function getMode() {
        return $this->get('mode');
    }
}
