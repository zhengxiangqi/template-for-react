module.exports = function(gulp, config, plugins) {
    gulp.task('connect-reload', function() {
        return gulp.src(config.tmp + 'dist/')
            .pipe(plugins.connect.reload());
    });

    gulp.task('rebuild-styles', function(done) {
        plugins.sequence(
            'styles.sources',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-webpage', function(done) {
        plugins.sequence(
            'webpage.jshint',
            'webpage.sources',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-static', function(done) {
        plugins.sequence(
            'static.copy',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-docs', function(done) {
        plugins.sequence(
            'docs.copy',
            'connect-reload',
            'beep',
            done
        );
    });

    return function() {
        plugins.connect.server({
            name: 'Development Server',
            https: false,
            host: 'localhost',
            port: '8080',
            livereload: true,
            root: config.tmp + 'dist/',
            fallback: 'index.html'
        });
        
        gulp.watch(config.styles.sources, ['rebuild-styles']);
        gulp.watch(config.webpage.sources, ['rebuild-webpage']);
        gulp.watch(config.static.sources, ['rebuild-static']);
        gulp.watch(config.docs.sources, ['rebuild-docs']);
    };
};
