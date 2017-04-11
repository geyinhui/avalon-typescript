/**
 * Created by baiqb on 2017/4/9.
 */
var express = require('express');
var opn = require('opn');
var webpack = require('webpack');

var devWebpack = require('./webpack.dev');
var pathConfig = require('../config/path');

var app = express();
var compiler = webpack(devWebpack, function (err, stats) {
    if (err) throw err;
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');
});

var port = '8082';
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: function () {

    }
});

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb();
    })
});

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(pathConfig.dist, express.static('./'));

var uri = 'http://localhost:' + port;

var _resolve;
var readyPromise = new Promise(function (resolve) {
    _resolve = resolve;
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
// when env is testing, don't need open it
    opn(uri);
    _resolve();
});

var server = app.listen(port);

module.exports = {
    ready: readyPromise,
    close: function () {
        server.close();
    }
};

