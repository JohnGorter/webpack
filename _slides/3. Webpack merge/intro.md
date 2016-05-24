# Config Splitting
More complex scenario's require different setups:
- Development environments needs debugging info 
- Test environments run tests afterwards
- Production environments uglify and minify JavaScript


---
# prerequisites
- Webpack merge

``` 
npm i webpack-merge --save-dev
```

Configs are JavaScript files, so we can code in them

---
# API
```javascript
var output = merge(object1, object2, object3, ...);
 
// smarter merging for loaders, see below 
var output = merge.smart(object1, object2, object3, ...);
```

---
#Smart Merging of Loaders
Webpack-merge tries to be smart about merging loaders when merge.smart 
is used. Loaders with matching tests will be merged into a single 
loader value.

More info: https://www.npmjs.com/package/webpack-merge

---
# Define startup config
## webpack.config.js
```javascript
module.exports = require('./config/webpack.dev.js');
```

### Define common webpack config
## webpack.common.js
```javascript
var webpack = require('webpack');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  /* other settings and common config */
  resolve: { ... },
  module: { ... },
  plugins: [ ... ]
};

---
### define environment config
## webpack.dev.js
```javascript
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [ ... ],
  devServer: { ... }
});
```
---
### Labtime
Create the inital setup and test it

---
###Using external configuration
Webpack can be configured to start with a setup javascript file
- add a webpack.config.js (name is required)
- start webpack 

The config file is not JSON but a JavaScript file so it can
contain executable script. Lets look at an example:

---
###sample webpack.config.js
```javascript
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
```

