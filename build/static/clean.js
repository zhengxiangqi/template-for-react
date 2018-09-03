module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src([
                config.tmp + 'dist/index.html',
                config.tmp + 'dist/*.ico',
                config.tmp + 'dist/assets',
                config.tmp + 'dist/fonts',
                config.tmp + 'dist/images',
                config.tmp + 'dist/vendors'
            ], {read: false})
            .pipe(plugins.clean());
    };
};
