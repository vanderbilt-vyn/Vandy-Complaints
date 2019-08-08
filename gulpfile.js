const browserSync = ('browser-sync'),
    webpack = require('webpack'),
    webpackDevMiddleWare = require('webpack-dev-middleware'),
    webpackHotMiddleWare = require('webpack-hot-middleware'),
    pug = require('pug');
const webpackSettings = require('./webpack.config');
const bundler = webpack(webpackSettings);
const templatePath = path.join(__dirname, '/src/*.pug');

gulp.task('pug', () => {
    let locals = 'Some message';
    return gulp.src(templatePath)
        .pipe(pug({
            locals: locals
        }))
        .pipe(gulp.dest(path.join(__dirname('/public'))));
});

gulp.task('default', ['pug'], () => {
    browserSync.init({
        ui: {
            port: 8080
        },
        server: {
            baseDir: path.join(__dirname, '/src/client'),
            middleware: [
                webpackDevMiddleWare(bundler, {
                    publicPath: templatePath,
                    stats: {color: true}
                }),
                webpackHotMiddleWare(bundler)
            ]
        },
        files: [path.join(__dirname, '/src/client/*.js')],
        logFileChanges: true,
        logConnections: true
    });

});
