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
        let webpackPlugins = [];
        
        if (!config.devMode) {
            webpackPlugins.push(new UglifyJSPlugin({
                sourceMap: true
            }));
        }
        webpackPlugins.push(new HappyPackPlugin({
            id: 'webpage',
            loaders: [{
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }],
            threadPool: happyThreadPool,
            verbose: true,
            debug: (config.devMode) ? true : false
        }));
        
        let combined = combiner.obj([
            gulp.src(config.webpage.sources),
            webpack({
                entry: {
                    app: config.webpage.entry
                },
                devtool: (config.devMode) ? 'source-map' : false,
                output: {
                    filename: 'webpage.min.js',
                    library: 'webpage',
                    libraryTarget: 'var'
                },
                node: {
                    fs: 'empty'
                },
                plugins: webpackPlugins,
                module: {
                    loaders: [{
                        test: /\.js[x]?$/,
                        include: [resolve('app/webpage')],
                        exclude: /node_modules/,
                        loader: 'happypack/loader?id=webpage'
                    }]
                }
            }),
            plugins.rev(),
            gulp.dest(config.tmp + 'dist/app/webpage'),
        ]);
        combined.on('error', console.error.bind(console));
        return combined;
    }
}
