module.exports = function(gulp, config, plugins) {
    return function(done) {
        let completeCount = 0;

        function onComplete() {
            completeCount++;
            if (completeCount == 3) {
                done();
            }
        }

        gulp.src(config.static.sources, { base: 'app/static' })
            .pipe(gulp.dest(config.tmp + 'dist/'))
            .on('end', onComplete);

        gulp.src(config.static.libs, { base: 'app/libs' })
            .pipe(gulp.dest(config.tmp + 'dist/vendors/'))
            .on('end', onComplete);

        gulp.src(config.static.vendors, { base: 'node_modules' })
            .pipe(gulp.dest(config.tmp + 'dist/vendors/'))
            .on('end', onComplete);
    };
};
