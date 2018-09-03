module.exports = function(gulp, config, plugins) {
    return function(done) {
        if (config.devMode) {
            gulp.src(config.styles.sources_custom)
                .pipe(plugins.csslint())
                .pipe(plugins.csslint.formatter())
                .pipe(plugins.concat('styles-custom.min.css'))
                .pipe(plugins.rev())
                .pipe(gulp.dest(config.tmp + 'dist/app/styles/custom'))
                .on('end', done);
        } else {
            gulp.src(config.styles.sources_custom)
                .pipe(plugins.csslint())
                .pipe(plugins.csslint.formatter())
                .pipe(plugins.concat('styles-custom.min.css'))
                .pipe(plugins.uglifycss())
                .pipe(plugins.rev())
                .pipe(gulp.dest(config.tmp + 'dist/app/styles/custom'))
                .on('end', done);
        }
    };
};
