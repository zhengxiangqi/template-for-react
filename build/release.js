module.exports = function(gulp, config, plugins) {
    return function(file) {
        let sftp = plugins.sftp({
            host: 'ar.ronch.cc',
            user: 'webapp',
            remotePath: '/home/webapp/WebAR/'
        });

        if (file) {
            return gulp.src(file)
            .pipe(sftp);
        } else {
            return gulp.src('dist/**/*')
            .pipe(sftp);
        }
    };
};
