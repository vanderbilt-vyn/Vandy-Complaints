const browserSync = webpack = require('webpack'),
    express = require('express'),
    session = require("express-session"),
    path = require('path'), 
    gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    bodyParser = require("body-parser"),
    envConfig = require('simple-env-config'),
    logger = require('morgan'),
    webpackSettings = require('./webpack.config');

let env, conf, port, app;

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

const serve = async callback => {
    env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";
    conf = await envConfig("./config/config.json", env);
    port = process.env.PORT ? process.env.PORT : conf.port;

    // Setup our Express pipeline
    app = express();
    if (env !== "test") app.use(logger("dev"));
    app.engine("pug", require("pug").__express);
    app.set("views", __dirname);
    app.use(express.static(path.join(__dirname, "public")));
    app.use(logger('dev'));

    // Setup pipeline session support
    app.store = session({
        name: "session",
        secret: "VynCorp",
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: "/"
        }
    });
    app.use(app.store);
    // Finish with the body parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get("*", (req, res) => {
        const user = req.session.user;
        console.log(`Loading app for: ${user ? user.username : "nobody!"}`);
        let preloadedState = {};
        preloadedState = JSON.stringify(preloadedState).replace(/</g, "\\u003c");
        res.render("base.pug", {
          state: preloadedState
        });
    });

    let server;
    server = app.listen(port, () => {
        console.log(`VUVoice ${env} listening on: ${server.address().port}`);
    });
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
    './src/**/*.js',
    '!./src/**/*.spec.js',], assets);
exports.watch = watch;
exports.develop = gulp.series(assets, serve, watch);
