module.exports = function(gulp, config, plugins) {
    return function(done) {
        gulp.src([config.tmp + 'dist/rev/*.json', config.tmp + 'dist/app/styles/custom/*.css'])
            .pipe(plugins.revCollector({ replaceReved:true }))
            .pipe(gulp.dest(config.tmp + 'dist/app/styles/custom'))
            .on('end', done);
    };
};
