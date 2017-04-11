/**
 * Created by baiqb on 2017/4/9.
 */
var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var Es3ifyPlugin = require('es3ify-webpack-plugin');

var baseWebpack = require('./webpack.base');
var pathConfig = require('../config/path');


module.exports = merge(baseWebpack, {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ // 提取公用模块
            name: 'commons',
            filename: '[name].[chunkhash].js',
            minChunks: 3
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false,
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(pathConfig.dist, 'index.html'),
            template: path.resolve(pathConfig.root, 'index.html'),
            hash: false, // 为静态资源生成hash值
            minify: false,
            xhtml: true
        }),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ]),
        new CleanWebpackPlugin(['dist'], {
            root: path.join(pathConfig.root),
            verbose: true,
            dry: false,
        }),
        new Es3ifyPlugin()
    ]
});