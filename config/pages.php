<?php

return [
    /** middlewares for page routes */
    'middlewares' => [
        'api',
        'web',
        Larapress\CRUD\Middleware\JWTAuthenticate::class,
    ],

    /** a prefix for pages url routes /<prefix>/<page url> */
    'prefix' => 'pages',

    // enable/disable page rendering,
    // if this is false, the controller wont load page routes
    'enabled' => env('PAGE_RENDERING', false),
    // enable/disable wildcard page rendering
    'wildcard' => env('PAGE_RENDERING', false),

    // page rendering default settings
    'render' => [
        'blade' => 'larapress-pages::vue.app',
        /** default title to use when a page does not have a title */
        'title' => 'Larapress Pages: no title',
        'descrtiption' => 'Larapress Pages: no description',
        'author' => 'Larapress Pages: no author',
        'extra-metas' => [],
        'schema' => null,
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

    // page visit reporting
    'reports' => [
        'group' => 'pages',
        'pages' => 1,
    ],

    // crud resources in package
    'routes' => [
        'pages' => [
            'name' => 'pages',
            'model' => \Larapress\Pages\Models\Page::class,
            'provider' => \Larapress\Pages\CRUD\PageCRUDProvider::class,
        ],
        'page_schemas' => [
            'name' => 'page-schemas',
            'model' => \Larapress\Pages\Models\PageSchema::class,
            'provider' => \Larapress\Pages\CRUD\PageSchemaCRUDProvider::class,
        ],
    ],

    'permissions' => [
        \Larapress\Pages\CRUD\PageCRUDProvider::class,
        \Larapress\Pages\CRUD\PageSchemaCRUDProvider::class,
    ],
];
