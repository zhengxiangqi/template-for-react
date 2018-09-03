module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src(config.tmp + 'dist/app/webpage', {read: false})
            .pipe(plugins.clean());
    };
};
