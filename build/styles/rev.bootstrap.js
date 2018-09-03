module.exports = function(gulp, config, plugins) {
    return function(done) {
        gulp.src([config.tmp + 'dist/rev/*.json', config.tmp + 'dist/app/styles/bootstrap/*.js'])
            .pipe(plugins.revCollector({ replaceReved:true }))
            .pipe(gulp.dest(config.tmp + 'dist/app/styles/bootstrap'))
            .on('end', done);
    };
};
