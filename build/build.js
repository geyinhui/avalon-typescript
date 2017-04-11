/**
 * Created by baiqb on 2017/4/9.
 */
var webpack = require('webpack');
var webpackConfig = require('./webpack.build');

webpackConfig.output.filename = '[name].[chunkhash].js';

webpack(webpackConfig, function (err, stats) {
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');
});