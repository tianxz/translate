var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var util = require('util');

gulp.task('copy-vendor', function () {
    for (var name in conf.vendors) {
        var vendor = conf.vendors[name];
        var src = [];
        switch (vendor.codeStyle) {
            case conf.vendorCodeStyle.JS:
                src.push(path.join(vendor.dir, name + '.js'));
                src.push(path.join(vendor.dir, name + '.min.js'));
                break;
            case conf.vendorCodeStyle.DIR:
                src.push(path.join(vendor.dir, '/**'));
                if (vendor.excludes && util.isArray(vendor.excludes)) {
                    vendor.excludes.forEach(function (exclude) {
                        src.push(path.join('!' + vendor.dir, '/**/', exclude));
                    });
                }
                break;
        }

        gulp
            .src(src)
            .pipe(gulp.dest(path.join(conf.paths.tmp, conf.paths.serve, conf.paths.vendor, name)));
    }
});

gulp.task('copy-index', function () {
    gulp
        .src(path.join(conf.paths.src, 'index.html'))
        .pipe(gulp.dest(path.join(conf.paths.tmp, conf.paths.serve)));
});

gulp.task('copy', ['copy-index', 'copy-vendor']);