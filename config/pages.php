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

    /** default title to use when a page does not have a title */
    'default-title' => 'Larapress Pages: no title',

    /** default template to use when a page is rendered and has no template selected */
    'default-template' => 'Centered',

    /** route defenitions */
    'routes' => [
        'pages' => [
            'name' => 'pages',
        ],
        'page-schemas' => [
            'name' => 'page-schemas'
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
        ],
        [
            'id' => 'en',
            'abbr' => 'en',
            'title' => 'English',
        ],
    ],

    /** safe sources for client to ask with "ServerSources" page property */
    'safe-sources' => [
        IPermissionsRepository::class,
        IRoleRepository::class,
        IFilterRepository::class,
    ]
];
