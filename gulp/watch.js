var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', [], function () {

    gulp.watch([path.join(conf.paths.src, '/index.html')]);

    gulp.watch([
        path.join(conf.paths.src, '/less/**/*.css'),
        path.join(conf.paths.src, '/less/**/*.less')
    ], function (event) {
        if (isOnlyChange(event)) {
            //gulp.start('styles-reload');
        } else {
            //gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/**/*.js'), function (event) {
        if (isOnlyChange(event)) {
            //gulp.start('scripts-reload');
        } else {
            //gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/**/*.html'), function (event) {
        browserSync.reload(event.path);
    });
});