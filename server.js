'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
const devConfig  = require('./config/webpack.dev.config.js');
const { devServer: devServerConfig } = devConfig;
const SERVER_URL = `http://localhost:${devServerConfig.port}`;

new WebpackDevServer(webpack(devConfig), devServerConfig)
    .listen((devServerConfig.port), '0.0.0.0', (err) => {
        if (err) {
            console.info(err);
        } else {
            console.info('')
            open(SERVER_URL);
        }
    });
