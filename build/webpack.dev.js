/**
 * Created by baiqb on 2017/4/9.
 */
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var baseWebpack = require('./webpack.base');

Object.keys(baseWebpack.entry).forEach(function (name) {
    baseWebpack.entry[name] = ['./build/dev-client'].concat(baseWebpack.entry[name])
});

var webpackConfig = merge(baseWebpack, {
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
});

module.exports = webpackConfig;

