<?php

namespace Larapress\Pages\Metadata;

use Larapress\CRUD\Base\BasePermissionMetadata;
use Larapress\CRUD\Base\IPermissionsMetadata;
use Larapress\CRUD\Base\SingleSourceBaseMetadata;
use Larapress\CRUDRender\Base\BaseCRUDResourceView;
use Larapress\CRUDRender\Base\ICRUDViewNaming;
use Larapress\CRUDRender\Base\ICRUDViewRouting;
use Larapress\CRUDRender\Form\ICRUDFormMetadata;
use Larapress\CRUDRender\Menu\ICRUDMenuItemMetadata;
use Larapress\CRUDRender\Table\ICRUDTableMetadata;
use Larapress\Pages\CRUD\PageCRUDProvider;

class PageSchemaMetadata extends SingleSourceBaseMetadata implements
    IPermissionsMetadata,
    ICRUDViewNaming,
    ICRUDViewRouting
{
    use BaseCRUDResourceView;
    use BasePermissionMetadata;

    /***
     * get permissions required for each CRUD operation
     *
     * @return array
     */
    public function getPermissionVerbs()
    {
        return [
            self::VIEW,
            self::CREATE,
            self::EDIT,
            self::DELETE,
        ];
    }

    /**
     * Permission group name.
     *
     * @return string
     */
    public function getPermissionObjectName()
    {
        return config('larapress.pages.routes.page-schemas.name');
    }

    /**
     * @return array|\Illuminate\Contracts\Translation\Translator|null|string
     */
    public function getSingular()
    {
        return trans(config('larapress.pages.translations.namespace').'::models.page-schemas.title.singular');
    }

    /**
     * @return array|\Illuminate\Contracts\Translation\Translator|null|string
     */
    public function getPlural()
    {
        return trans(config('larapress.pages.translations.namespace').'::models.page-schemas.title.plural');
    }

    /**
     * @return \Larapress\CRUD\Base\ICRUDProvider
     */
    public function getCRUDProvider()
    {
        return new PageCRUDProvider();
    }
}
