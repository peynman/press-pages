<?php

return [
    /** middlewares for page routes */
    'middlewares' => [
        'api',
        'web',
    ],

    /** a prefix for pages url routes /<prefix>/<page url> */
    'prefix' => 'pages',

    // enable/disable page rendering,
    // if this is false, the controller wont load page routes
    'enabled' => env('PAGE_RENDERING', false),

    // page rendering default settings
    'page_settings' => [
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

    // crud resources in package
    'routes' => [
        'pages' => [
            'name' => 'pages',
            'model' => \Larapress\Pages\Models\Page::class,
            'provider' => \Larapress\Pages\CRUD\PageCRUDProvider::class,
        ],
        'page_schemas' => [
            'name' => 'page_schemas',
            'model' => \Larapress\Pages\Models\PageSchema::class,
            'provider' => \Larapress\Pages\CRUD\PageSchemaCRUDProvider::class,
        ],
    ],

    'permissions' => [
        \Larapress\Pages\CRUD\PageCRUDProvider::class,
        \Larapress\Pages\CRUD\PageSchemaCRUDProvider::class,
    ],
];
