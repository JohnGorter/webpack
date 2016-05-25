var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    path: process.cwd() + '/dev',
    filename: 'bundle.js'
  },
});