module.exports = function(gulp, config, plugins) {
    return function(done) {
        plugins.sequence(
            'clean',
            'static.copy',
            'static.rev',
            'styles.sources.bootstrap',
            'styles.sources.custom',
            'styles.rev.bootstrap',
            'styles.rev.custom',
            'webpage.jshint',
            'webpage.sources',
            'webpage.rev',
            'docs.copy',
            'docs.inject',
            'inject',
            'dist.clean',
            'dist.copy',
            'beep',
            done
        );
    };
};
