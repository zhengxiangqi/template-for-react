const webpack = require('webpack-stream');
const combiner = require('stream-combiner2');
const os = require('os');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HappyPackPlugin = require('happypack');
const happyThreadPool = HappyPackPlugin.ThreadPool({ size: os.cpus().length });

function resolve (dir) {
    return path.join(__dirname, '..', '..', dir);
}

module.exports = function(gulp, config, plugins) {
    return function() {
        var webpackPlugins = [];
        
        if (!config.devMode) {
            webpackPlugins.push(new UglifyJSPlugin({
                sourceMap: true
            }));
        }
        webpackPlugins.push(new HappyPackPlugin({
            id: 'styles',
            loaders: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }],
            threadPool: happyThreadPool,
            verbose: true,
            debug: (config.devMode) ? true : false
        }));

        var combined = combiner.obj([
            gulp.src(config.styles.sources),
            webpack({
                entry: config.styles.entry,
                devtool: (config.devMode) ? 'source-map' : false,
                output: {
                    filename: 'styles.min.js',
                    library: 'styles',
                    libraryTarget: 'var'
                },
                node: {
                    fs: 'empty'
                },
                plugins: webpackPlugins,
                module: {
                    loaders: [{
                        test: /\.(scss)$/,
                        include: [resolve('app/styles')],
                        exclude: /node_modules/,
                        loader: 'happypack/loader?id=styles'
                        // use: [{
                        //     loader: 'style-loader', // inject CSS to page
                        // }, {
                        //     loader: 'css-loader', // translates CSS into CommonJS modules
                        // }, {
                        //     loader: 'postcss-loader', // Run post css actions
                        //     options: {
                        //         plugins: function () { // post css plugins, can be exported to postcss.config.js
                        //             return [
                        //                 require('precss'),
                        //                 require('autoprefixer')
                        //             ];
                        //         }
                        //     }
                        // }, {
                        //     loader: 'sass-loader' // compiles Sass to CSS
                        // }]
                    }]
                }
            }),
            plugins.injectVersion(),
            plugins.csslint(),
            gulp.dest(config.tmp + 'dist/app/'),
        ]);
        combined.on('error', console.error.bind(console));
        return combined;
    }
}
