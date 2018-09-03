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
                sourceMap: false
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
            gulp.src(config.styles.sources_bootstrap),
            webpack({
                entry: config.styles.entry_bootstrap,
                devtool: false,
                output: {
                    filename: 'styles-bootstrap.min.js',
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
                    }]
                }
            }),
            plugins.rev(),
            gulp.dest(config.tmp + 'dist/app/styles/bootstrap'),
        ]);
        combined.on('error', console.error.bind(console));
        
        return combined;
    }
}
