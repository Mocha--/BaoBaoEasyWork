'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    context: path.join(__dirname, '../src'),
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['transform-decorators-legacy', 'transform-runtime']
            }
        }, {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },
                //{
                //loader: 'postcss-loader',
                //options: {}
                //},
                {
                loader: 'stylus-loader'
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.(woff|ttf|woff2)$/,
            use: [{
                loader: 'url-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html'),
            inject: 'body',
            hash: false
        })
    ]
}
