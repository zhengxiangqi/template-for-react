module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src(config.tmp + 'dist')
            .pipe(plugins.clean());
    };
};
