module.exports = function(gulp, config, plugins) {
    return function() {
        return gulp.src(config.test, { read: false })
            .pipe(plugins.mocha({reporter: 'spec'}));
    };
};
