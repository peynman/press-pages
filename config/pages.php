<?php

use Larapress\CRUD\Repository\IPermissionsRepository;
use Larapress\CRUD\Repository\IRoleRepository;

return [
    'permissions' => [
        \Larapress\Pages\CRUD\PageCRUDProvider::class,
        \Larapress\Pages\CRUD\PageSchemaCRUDProvider::class,
    ],

    'controllers' => [
        \Larapress\Pages\Controllers\PageController::class,
        \Larapress\Pages\Controllers\PageSchemaController::class,
    ],

    /** middlewares for page routes */
    'middleware' => [
        'api',
        'web',
    ],

    /** a prefix for pages url routes /<prefix>/<page url> */
    'prefix' => 'pages',

    'page-defaults' => [
        'blade' => 'larapress-pages::vue.app',
        /** default title to use when a page does not have a title */
        'title' => 'Larapress Pages: no title',
        'descrtiption' => 'Larapress Pages: no description',
        'author' => 'Larapress Pages: no author',
        'extra-metas' => [],
        'schema' => null,
    ],

    /** api route defenitions */
    'routes' => [
        'pages' => [
            'name' => 'pages',
            'extend' => [
                'providers' => [],
            ],
        ],
        'page-schemas' => [
            'name' => 'page-schemas',
            'extend' => [
                'providers' => [],
            ],
        ]
    ],

    /** Laravel echo, to connect on client side */
    'echo' => [
        'port' => env('ECHO_PORT', 8443),
        'web_path' => env('ECHO_WEB_PATH', ''),
    ],

    /** Available languages */
    'languages' => [
        [
            'id' => 'fa',
            'abbr' => 'fa',
            'title' => 'Farsi',
            'direction' => 'rtl',
        ],
        [
            'id' => 'en',
            'abbr' => 'en',
            'title' => 'English',
            'direction' => 'ltr',
        ],
        [
            'id' => 'ar',
            'abbr' => 'ar',
            'title' => 'Arabic',
            'direction' => 'rtl',
        ],
        [
            'id' => 'ku',
            'abbr' => 'ku',
            'title' => 'Kurdic',
            'direction' => 'rtl',
        ],
    ],

    /** safe sources for client to ask with "ServerSources" page property */
    'safe-sources' => [
        IPermissionsRepository::class,
        IRoleRepository::class,
        IFilterRepository::class,
    ]
];
