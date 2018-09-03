module.exports = function(gulp, config, plugins) {
    return function(done) {
        gulp.src(config.tmp + 'dist/docs/index.html')
            .pipe(plugins.inject(
                gulp.src([
                    config.tmp + 'dist/docs/vendors/**/*.css',
                    config.tmp + 'dist/docs/vendors/**/*.js'
                ], {read: false}), {
                    transform: function (filepath) {
                        let linkUrl = plugins.inject.transform.apply(plugins.inject.transform, arguments);
                        return linkUrl.replace('/tmp/dist', '');
                    }
                }
            ))
            .pipe(gulp.dest(config.tmp + 'dist/docs'))
            .on('end', done);
    };
};
