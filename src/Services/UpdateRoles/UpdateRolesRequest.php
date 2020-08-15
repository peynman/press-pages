<?php

namespace Larapress\Pages\Services\UpdateRoles;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Collection;

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
            'roles.*.id' => 'required|exists:roles,id',
            'pages.*' => 'required|exists:pages,id',
        ];
    }

    public function getRoleIds() {
        return Collection::make($this->get('roles'))->pluck('id');
    }

    public function getPageIds() {
        return $this->get('pages');
    }

    public function getMode() {
        return $this->get('mode');
    }
}
