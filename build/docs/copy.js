module.exports = function(gulp, config, plugins) {
    return function(done) {
        let completeCount = 0;

        function onComplete() {
            completeCount++;
            if (completeCount == 2) {
                done();
            }
        }

        gulp.src(config.docs.sources)
            .pipe(gulp.dest(config.tmp + 'dist/docs/'))
            .pipe(plugins.filter(['**/*.html', '**/*.md']))
            .pipe(plugins.injectVersion())
            .pipe(gulp.dest(config.tmp + 'dist/docs/'))
            .on('end', onComplete);

        gulp.src(config.docs.vendors, { base: 'node_modules' })
            .pipe(gulp.dest(config.tmp + 'dist/docs/vendors'))
            .on('end', onComplete);
    };
};
