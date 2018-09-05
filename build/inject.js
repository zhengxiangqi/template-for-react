module.exports = function(gulp, config, plugins) {
    return function(done) {
        gulp.src(config.tmp + 'dist/index.html')
            .pipe(plugins.inject(
                gulp.src(config.inject, {read: false}), {
                    transform: function (filepath) {
                        let linkUrl = plugins.inject.transform.apply(plugins.inject.transform, arguments);
                        return linkUrl.replace('/tmp/dist', '');
                    }
                }
            ))
            .pipe(gulp.dest(config.tmp + 'dist'))
            .on('end', done);
    };
};
