/**
 * Created by baiqb on 2017/4/9.
 */
var pathConfig = require('../config/path');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    entry: {
        app: './src/main.ts'
    },
    output: {
        path: path.join(pathConfig.root, './dist'),
        publicPath: './', // 资源路径，以保证网页可以正常加载到文件夹
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loaders: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('typings-for-css-modules-loader?modules&namedExport&camelCase')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].[hash].css")
    ]
};

module.exports = webpackConfig;