var gulpUtil = require('gulp-util');
var path = require('path');
var vendorPath = 'node_modules';

exports.version = {
    default: '1.0.0-dev'
};

/**
 *  项目主要路径配置
 */
exports.paths = {
    src: 'src',
    dist: 'release',
    tmp: '.tmp',
    serve: 'serve',
    vendor: 'vendors'
};

exports.vendorCodeStyle = {
    JS: 'JS',
    DIR: 'DIR'
};

/**
 * 第3方 js 库配置
 * 1. 用于 copy 到 serve 目录下
 * @type {{angular: {codeStyle: string, dir: string}, bootstrap: {codeStyle: string, dir: string, excludes: [string]}}}
 */
exports.vendors = {
    angular: {
        codeStyle: exports.vendorCodeStyle.JS,
        dir: path.join(vendorPath, 'angular')
    },
    bootstrap: {
        codeStyle: exports.vendorCodeStyle.DIR,
        dir: path.join(vendorPath, 'bootstrap/dist'),
        excludes: ['js/', 'js/**']
    }
};

/**
 *  Gulp 插件错误处理
 */
exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gulpUtil.log(gulpUtil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};