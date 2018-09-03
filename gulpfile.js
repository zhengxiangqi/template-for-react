const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
let config = require('./build/config.js');

config.devMode = !!plugins.util.env.dev;

gulp.task('clean', require('./build/clean.js')(gulp, config, plugins));
gulp.task('clean-all', require('./build/clean-all.js')(gulp, config, plugins));
gulp.task('dist.clean', require('./build/dist/clean.js')(gulp, config, plugins));
gulp.task('dist.copy', require('./build/dist/copy.js')(gulp, config, plugins));

gulp.task('styles.clean.bootstrap', require('./build/styles/clean.bootstrap.js')(gulp, config, plugins));
gulp.task('styles.clean.custom', require('./build/styles/clean.custom.js')(gulp, config, plugins));
gulp.task('styles.sources.bootstrap', require('./build/styles/sources.bootstrap.js')(gulp, config, plugins));
gulp.task('styles.sources.custom', require('./build/styles/sources.custom.js')(gulp, config, plugins));
gulp.task('styles.rev.bootstrap', require('./build/styles/rev.bootstrap.js')(gulp, config, plugins));
gulp.task('styles.rev.custom', require('./build/styles/rev.custom.js')(gulp, config, plugins));

gulp.task('webpage.clean', require('./build/webpage/clean.js')(gulp, config, plugins));
gulp.task('webpage.jshint', require('./build/webpage/jshint.js')(gulp, config, plugins));
gulp.task('webpage.sources', require('./build/webpage/sources.js')(gulp, config, plugins));
gulp.task('webpage.rev', require('./build/webpage/rev.js')(gulp, config, plugins));

gulp.task('static.clean', require('./build/static/clean.js')(gulp, config, plugins));
gulp.task('static.copy', require('./build/static/copy.js')(gulp, config, plugins));
gulp.task('static.rev', require('./build/static/rev.js')(gulp, config, plugins));

gulp.task('docs.clean', require('./build/docs/clean.js')(gulp, config, plugins));
gulp.task('docs.copy', require('./build/docs/copy.js')(gulp, config, plugins));
gulp.task('docs.inject', require('./build/docs/inject.js')(gulp, config, plugins));

gulp.task('inject', require('./build/inject.js')(gulp, config, plugins));
gulp.task('beep', require('./build/beep.js')(gulp, config, plugins));
gulp.task('watch', require('./build/watch.js')(gulp, config, plugins));
gulp.task('all', require('./build/all.js')(gulp, config, plugins));
plugins.param(gulp, process.argv).task('release', require('./build/release.js')(gulp, config, plugins));

gulp.task('default', ['all']);
