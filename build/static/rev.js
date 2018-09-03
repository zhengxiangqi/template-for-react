module.exports = function(gulp, config, plugins) {
    return function(done) {
        let completeCount = 0;

        function onComplete() {
            completeCount++;
            if (completeCount == 2) {
                done();
            }
        }

        gulp.src([config.tmp + 'dist/rev/*.json', config.tmp + 'dist/index.html'])
            .pipe(plugins.revCollector({ replaceReved:true }))
            .pipe(gulp.dest(config.tmp + 'dist/'))
            .on('end', onComplete);

        gulp.src([config.tmp + 'dist/rev/*.json', config.tmp + 'dist/app/**/*'])
            .pipe(plugins.revCollector({ replaceReved:true }))
            .pipe(gulp.dest(config.tmp + 'dist/app/'))
            .on('end', onComplete);
    };
};
