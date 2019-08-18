const browserSync = require('browser-sync').create(),
    webpack = require('webpack'),
    path = require('path') 
    gulp = require('gulp'),
    mocha = require('gulp-mocha')
    webpackSettings = require('./webpack.config');

const assets = () => new Promise((resolve, reject) => {
    webpack(webpackSettings, (err, stats) => {
        if (err){
            reject(err);
        }
        if (stats.hasErrors()){
            reject(new Error(stats.compilation.errors.join('\n')));
        }
        resolve();
    });
});
exports.assets = assets;

const serve = callback => {
    browserSync.init({
        server: './public',
        port: 8080,
        host: 'localhost'
    }, callback);
};
exports.serve = serve;

const reload = callback => {
    browserSync.reload();
    callback();
};
exports.reload = reload;

const test = () =>
    gulp.src(
        ['**/*spec.js', '!node_modules/**/*spec.js'],
        {
            ignore: 'node_modules', 
            read: false
        })
        .pipe(mocha({reporter: 'nyan'}));
exports.test = test;

const watch = callback => gulp.watch([
    '**/*.js', 
    '!node_modules/**/*.js',
    '!**/*spec.js'], gulp.series(assets, reload));
exports.watch = watch;
exports.develop = gulp.series(assets, serve, watch);
