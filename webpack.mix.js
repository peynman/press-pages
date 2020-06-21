const mix = require('laravel-mix');
let exec = require('child_process').exec;
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix
    .options({
        extractVueStyles: true,
    })
    .webpackConfig({
        output: {
            chunkFilename: '[name].bundle.js',
            publicPath: 'resources/dis/js',
        },
        plugins: [new VuetifyLoaderPlugin({})]
    })
    .js('resources/js/app.js', '/js')
    .extract([
        'vue',
        'vue-router',
        'axios',
        'vue-axios',
        'vue-template-compiler',
        'vuex',
        'vuetify',
        'blockly',
        'markdown-it',
        'mathlive',
        'mermaid',
        'jsoneditor',
        'moment-jalaali',
        'moment',
    ])
    .setPublicPath('resources/dist/')
    .sass('resources/sass/app.scss', 'resources/dist/css')
    .setResourceRoot('../')
    .then(() => {
        exec('node_modules/rtlcss/bin/rtlcss.js resources/dist/css/app.css resources/dist/css/app-rtl.css');
    });

if (mix.inProduction()) {
    mix.version();
} else {
    mix.copyDirectory('resources/dist/', '../../storage/app/public/vendor/larapress-pages');
}

mix.disableNotifications();
