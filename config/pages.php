<?php

return [
    /** middlewares for page routes */
    'middleware' => [
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
];
