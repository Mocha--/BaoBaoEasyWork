'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const PORT = 7200;

module.exports = webpackMerge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    // context: in base config
    entry: [
        `webpack-dev-server/client?http://localhost:${PORT}`,
        'webpack/hot/dev-server',
        './index.js'
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        port: PORT,
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
})
