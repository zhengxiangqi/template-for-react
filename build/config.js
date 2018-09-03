module.exports = {
    devMode: false,
    styles: {
        entry_bootstrap: './app/styles/bootstrap/index.scss',
        entry_custom: './app/styles/custom/index.css',
        sources_bootstrap: ['app/styles/bootstrap/**/*'],
        sources_custom: ['app/styles/custom/**/*']
    },
    webpage: {
        entry: './app/webpage/index.js',
        sources: ['app/webpage/**/*']
    },
    static: {
        index: ['app/static/index.html'],
        sources: [
            'app/static/favicon.ico',
            'app/static/assets/*',
            'app/static/images/*',
            'app/static/fonts/*'
        ],
        libs: ['app/libs/**/*'],
        vendors: [
            'node_modules/fastclick/lib/fastclick.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/react/umd/react.development.js',
            'node_modules/react/umd/react.production.min.js',
            'node_modules/react-dom/umd/react-dom.development.js',
            'node_modules/react-dom/umd/react-dom.production.min.js',
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css.map',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js.map'
        ]
    },
    docs: {
        sources: ['docs/**/*'],
        vendors: [
            'node_modules/docsify/lib/docsify.min.js',
            'node_modules/docsify/lib/themes/vue.css'
        ]
    },
    dist: 'dist/',
    tmp: 'tmp/'
}
