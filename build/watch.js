module.exports = function(gulp, config, plugins) {
    gulp.task('connect-reload', function() {
        return gulp.src(config.tmp + 'dist/')
            .pipe(plugins.connect.reload());
    });

    gulp.task('rebuild-styles-bootstrap', function(done) {
        plugins.sequence(
            'styles.clean.bootstrap',
            'styles.sources.bootstrap',
            'styles.rev.bootstrap',
            'inject',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-styles-custom', function(done) {
        plugins.sequence(
            'styles.clean.custom',
            'styles.sources.custom',
            'styles.rev.custom',
            'inject',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-webpage', function(done) {
        plugins.sequence(
            'webpage.clean',
            'webpage.jshint',
            'webpage.sources',
            'webpage.rev',
            'inject',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-static', function(done) {
        plugins.sequence(
            'static.clean',
            'static.copy',
            'static.rev',
            'inject',
            'connect-reload',
            'beep',
            done
        );
    });

    gulp.task('rebuild-docs', function(done) {
        plugins.sequence(
            'docs.clean',
            'docs.copy',
            'docs.inject',
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
        
        gulp.watch(config.styles.sources_bootstrap, ['rebuild-styles-bootstrap']);
        gulp.watch(config.styles.sources_custom, ['rebuild-styles-custom']);
        gulp.watch(config.webpage.sources, ['rebuild-webpage']);
        gulp.watch(config.static.index, ['rebuild-static']);
        gulp.watch(config.static.sources, ['rebuild-static']);
        gulp.watch(config.static.libs, ['rebuild-static']);
        gulp.watch(config.static.vendors, ['rebuild-static']);
        gulp.watch(config.docs.sources, ['rebuild-docs']);
    };
};
