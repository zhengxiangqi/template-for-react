module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src(config.tmp + 'dist/docs', {read: false})
            .pipe(plugins.clean());
    };
};
