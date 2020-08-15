const mix = require('laravel-mix');
let exec = require('child_process').exec;
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

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

 // version 1.6 vue-loader with laravel mix
 // t's because the order of vue-loader and vuetify-loader was added by laravel-mix
mix.extend('vuetify', new class {
    webpackConfig (config) {
        config.plugins.push(new VuetifyLoaderPlugin({}))
    }
})

mix
    .options({
        extractVueStyles: false,
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            }
        },
        terser: {
            cache: false,
            parallel: false,
            sourceMap: false,
            terserOptions: {
                compress: false
            }
        }
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
        ]
    })
    .babelConfig({
        plugins: ['@babel/plugin-syntax-dynamic-import']
    })
    .js('resources/js/app.js', 'js/')
    .setPublicPath('resources/dist/')
    .setResourceRoot('../')
    .copyDirectory('resources/dist/', '../../public/vendor/larapress-pages')
    .disableNotifications();

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
} else {
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
    mix.sass('resources/sass/app.scss', 'resources/dist/css')
}

mix.vuetify();
mix.sourceMaps();
