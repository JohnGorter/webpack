var webpack = require('webpack')
var merge = require('webpack-merge')

var commonconfig =  {
        context: __dirname,
        entry: "./test.js",
        output: {
            filename: "bundle.js"
        }
    }

var PROD = (process.env.NODE_ENV === 'production')
var config = {
    output: { 
        path: __dirname + "/dev" 
    }   
};
if (PROD){
    config = {
        output: { 
            path: __dirname + "/prod",
            filename: "bundle.min.js"
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
    }
}
    
module.exports = require('./config/webpack.prod.js')