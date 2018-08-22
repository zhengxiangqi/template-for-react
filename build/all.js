module.exports = function(gulp, config, plugins) {
    return function(done) {
        plugins.sequence(
            'webpage.jshint',
            'clean',
            'webpage.sources',
            'styles.sources',
            'static.copy',
            'docs.copy',
            'dist.clean',
            'dist.copy',
            'beep',
            done
        );
    };
};
