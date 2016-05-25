var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
        output: { 
            path: process.cwd() + "/prod",
            filename: "bundle.min.js"
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
    });