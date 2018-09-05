module.exports = function(gulp, config, plugins) {
    return function(done) {
        let completeCount = 0;

        function onComplete() {
            completeCount++;
            if (completeCount == 4) {
                done();
            }
        }

        gulp.src(config.static.index, { base: 'app/static' })
            .pipe(gulp.dest(config.tmp + 'dist'))
            .on('end', onComplete);

        gulp.src(config.static.sources, { base: 'app/static' })
            .pipe(plugins.rev())
            .pipe(gulp.dest(config.tmp + 'dist'))
            .pipe(plugins.rev.manifest('static.json'))
            .pipe(gulp.dest(config.tmp + 'dist/rev'))
            .on('end', onComplete);

        gulp.src(config.static.libs, { base: 'app/libs' })
            .pipe(gulp.dest(config.tmp + 'dist/vendors/libs'))
            .on('end', onComplete);

        gulp.src(config.static.vendors, { base: 'node_modules' })
            .pipe(gulp.dest(config.tmp + 'dist/vendors'))
            .on('end', onComplete);
    };
};
