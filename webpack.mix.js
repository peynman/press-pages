const mix = require('laravel-mix');
let exec = require('child_process').exec;
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const fs = require('fs');

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

if (process.env.NODE_ENV !== 'publish_only') {
    mix.disableNotifications();
}

if (process.env.NODE_ENV === 'publish_only') {
    mix.copyDirectory('resources/dist/', '../../public/vendor/larapress-pages');
} else if (process.env.NODE_ENV === 'clear_only') {
    fs.rmdirSync('../../public/vendor/larapress-pages', { recursive: true });
    fs.rmdirSync('./resources/dist', { recursive: true })
    fs.mkdirSync('./resources/dist')
} else {
    mix
    .options({
        extractVueStyles: false,
    })
    .webpackConfig({
        output: {
            chunkFilename: '[name].bundle.js',
            publicPath: '/vendor/larapress-pages/',
        },
        plugins: [
            new MomentLocalesPlugin({
                localesToKeep: ['fa']
            }),
        ],
    })
    .babelConfig({
        plugins: ['@babel/plugin-syntax-dynamic-import']
    })
    .setPublicPath('resources/dist/')
    .setResourceRoot('../')
    .sourceMaps();
}

if (mix.inProduction()) {
    mix.extract([
        'vuetify',
        'vue',
        'vuex',
        'moment',
        'moment-jalaali',
        'moment-timezone',
        'lodash.clonedeep'
    ]);
    mix.version();
} else  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'css_only') {
    // laravel-mix webpack 4 bug
    // if extracted sources, css files are empty
    Mix.listen('configReady', config => {
        const scssRule = config.module.rules.find(r => r.test.toString() === /\.scss$/.toString())
        const scssOptions = scssRule.loaders.find(l => l.loader === 'sass-loader').options
        scssOptions.data = '@import "./resources/sass/styles.scss";'

        const sassRule = config.module.rules.find(r => r.test.toString() === /\.sass$/.toString())
        const sassOptions = sassRule.loaders.find(l => l.loader === 'sass-loader').options
        sassOptions.data = '@import "./resources/sass/styles.scss"'
    })
    mix.sass('resources/sass/app.scss', 'resources/dist/css');

    if (process.env.NODE_ENV === 'development') {
        mix.copyDirectory('resources/dist/', '../../public/vendor/larapress-pages');
    }
}

// compile js files for dev/prod envs only
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    // version 1.6 vue-loader with laravel mix
    // t's because the order of vue-loader and vuetify-loader was added by laravel-mix
    mix.extend('vuetify', new class {
        webpackConfig (config) {
            config.plugins.push(new VuetifyLoaderPlugin({}))
        }
    })

    mix.js('resources/js/app.js', 'js/');
    mix.vuetify();
}
