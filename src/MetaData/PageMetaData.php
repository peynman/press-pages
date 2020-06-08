<?php

namespace Larapress\Pages\Metadata;

use Larapress\CRUD\Base\BasePermissionMetadata;
use Larapress\CRUD\Base\IPermissionsMetadata;
use Larapress\CRUD\Base\SingleSourceBaseMetadata;
use Larapress\CRUDRender\Base\BaseCRUDResourceView;
use Larapress\CRUDRender\Base\BaseJSONRenderProvider;
use Larapress\CRUDRender\Base\ICRUDViewNaming;
use Larapress\CRUDRender\Base\ICRUDViewRouting;
use Larapress\CRUDRender\Form\BaseCRUDFormMetadata;
use Larapress\CRUDRender\Form\FormFieldFactory;
use Larapress\CRUDRender\Form\ICRUDFormMetadata;
use Larapress\CRUDRender\Menu\BaseCRUDMenuItemMetadata;
use Larapress\CRUDRender\Menu\ICRUDMenuItemMetadata;
use Larapress\CRUDRender\Table\BaseCRUDTableMetadata;
use Larapress\CRUDRender\Table\ICRUDTableMetadata;
use Larapress\CRUDRender\Table\TableViewColumnFactory;
use Larapress\Pages\CRUD\PageCRUDProvider;
use Larapress\Profiles\Flags\DomainFlags;
use Larapress\Profiles\Metadata\DomainMetadata;
use Larapress\Profiles\Metadata\UserMetadata;

class PageMetadata extends SingleSourceBaseMetadata implements
    IPermissionsMetadata,
    ICRUDFormMetadata,
    ICRUDViewNaming,
    ICRUDViewRouting,
    ICRUDMenuItemMetadata,
    ICRUDTableMetadata
{
    use BaseCRUDResourceView;
    use BasePermissionMetadata;
    use BaseCRUDFormMetadata;
    use BaseCRUDMenuItemMetadata;
    use BaseCRUDTableMetadata;

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
            self::REPORTS,
        ];
    }

    /**
     * Permission group name.
     *
     * @return string
     */
    public function getPermissionObjectName()
    {
        return config('larapress.pages.routes.pages.name');
    }

    /**
     * @return array|\Illuminate\Contracts\Translation\Translator|null|string
     */
    public function getSingular()
    {
        return trans(config('larapress.crud-render.theme.translations.namespace').'::models.pages.title.singular');
    }

    /**
     * @return array|\Illuminate\Contracts\Translation\Translator|null|string
     */
    public function getPlural()
    {
        return trans(config('larapress.crud-render.theme.translations.namespace').'::models.pages.title.plural');
    }

    /**
     * @return array
     */
    public function getTableColumns()
    {
        return [
            TableViewColumnFactory::id(),
            TableViewColumnFactory::template(
                trans(config('larapress.profiles.translations.namespace').'::tables.columns.author'),
                'author_id',
                'object-links',
                [
                    'id' => 'author_id',
                    'label' => 'author.name',
                    'links' => [
                        [
                            'type' => 'open-tab',
                            'url' => UserMetadata::instance()->getEditFormUrl('__id__'),
                            'method' => 'GET',
                            'metadata' => BaseJSONRenderProvider::getMetadataFormToArray(UserMetadata::instance()),
                            'icon' => 'edit',
                        ],
                        [
                            'type' => 'open-tab',
                            'url' => DomainMetadata::instance()->getEditFormUrl('__id__'),
                            'method' => 'GET',
                            'icon' => 'group_work',
                            //'metadata' => BaseJSONRenderProvider::getMetadataFormToArray(DomainMetadata::instance()),
                            'roles' => config('larapress.profiles.security.roles.affiliates')
                        ],
                    ],
                ],
                true,
                30
            ),
            TableViewColumnFactory::column(
                trans(config('larapress.profiles.translations.namespace').'::tables.columns.name'),
                'name'
            ),
            TableViewColumnFactory::column(
                trans(config('larapress.profiles.translations.namespace').'::tables.columns.slug'),
                'slug'
            ),
            TableViewColumnFactory::template(
                trans(config('larapress.profiles.translations.namespace').'::tables.columns.flags'),
                'flags',
                'object-flags',
                [
                    'icons' => trans(config('larapress.profiles.translations.namespace').'::models.domains.flag-icons'),
                    'colors' => trans(config('larapress.profiles.translations.namespace').'::models.domains.flag-colors'),
                    'objects' => DomainFlags::toArray(),
                    'decorator' => TableViewColumnFactory::decorator('id', 'title', ':title'),
                ],
                true,
                30
            ),
            TableViewColumnFactory::created_at(),
            TableViewColumnFactory::updated_at(),
            TableViewColumnFactory::options($this),
        ];
    }

    /**
     * @return array
     */
    public function getTableDefaultQueryParams()
    {
        return [
            'with' => [
                'author' => ['name', 'id'],
            ],
        ];
    }

    /**
     * @return array
     */
    public function getCreateFields()
    {
        return [
            FormFieldFactory::text(
                'name',
                trans(config('larapress.profiles.translations.namespace').'::forms.labels.name'),
                'required',
                []
            ),
            FormFieldFactory::field(
                'editorjs',
                'body',
                trans(config('larapress.profiles.translations.namespace').'::forms.labels.body'),
                'editors',
                []
            ),
        ];
    }

    /**
     * @return \Larapress\CRUD\Base\ICRUDProvider
     */
    public function getCRUDProvider()
    {
        return new PageCRUDProvider();
    }
}
