module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src(config.tmp + 'dist/app/styles/custom', {read: false})
            .pipe(plugins.clean());
    };
};
