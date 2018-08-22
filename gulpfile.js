const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
let config = require('./build/config.js');

config.devMode = !!plugins.util.env.dev;

gulp.task('clean', require('./build/clean.js')(gulp, config, plugins));
gulp.task('clean-all', require('./build/clean-all.js')(gulp, config, plugins));
gulp.task('dist.clean', require('./build/dist/clean.js')(gulp, config, plugins));
gulp.task('dist.copy', require('./build/dist/copy.js')(gulp, config, plugins));
gulp.task('styles.sources', require('./build/styles/sources.js')(gulp, config, plugins));
gulp.task('webpage.jshint', require('./build/webpage/jshint.js')(gulp, config, plugins));
gulp.task('webpage.sources', require('./build/webpage/sources.js')(gulp, config, plugins));
gulp.task('static.copy', require('./build/static/copy.js')(gulp, config, plugins));
gulp.task('docs.copy', require('./build/docs/copy.js')(gulp, config, plugins));
gulp.task('beep', require('./build/beep.js')(gulp, config, plugins));
gulp.task('watch', require('./build/watch.js')(gulp, config, plugins));
gulp.task('all', require('./build/all.js')(gulp, config, plugins));
plugins.param(gulp, process.argv).task('release', require('./build/release.js')(gulp, config, plugins));

gulp.task('default', ['all']);
