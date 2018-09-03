module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src(config.tmp + 'dist/app/styles/bootstrap', {read: false})
            .pipe(plugins.clean());
    };
};
