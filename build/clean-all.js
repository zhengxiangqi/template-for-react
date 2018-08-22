module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src([config.dist, config.tmp])
            .pipe(plugins.clean());
    };
};
