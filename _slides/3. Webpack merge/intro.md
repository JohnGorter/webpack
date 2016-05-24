# Webpack merge
split and merge configurations

---
### Config Splitting
More complex scenario's require different setups:
- Development environments needs debugging info 
- Test environments run tests afterwards
- Production environments uglify and minify JavaScript


---
### prerequisites
- Webpack merge

``` 
npm i webpack-merge --save-dev
```

Configs are JavaScript files, so we can code in them

---
### API
```javascript
var output = merge(object1, object2, object3, ...);
 
// smarter merging for loaders, see below 
var output = merge.smart(object1, object2, object3, ...);
```

---
### Smart Merging of Loaders
Webpack-merge tries to be smart about merging loaders when merge.smart 
is used. Loaders with matching tests will be merged into a single 
loader value.

More info: https://www.npmjs.com/package/webpack-merge

---
### Merging configurations
Merging configurations in
- a single file
- split configuration files

---
### Single file merging
Use switches to set different settings for different environments, 
export the merge result of the common and specific configurations.
Example:

---
### Single file merging example
#### webpack.config.js
```javascript
const merge = require('webpack-merge');
const common = {
  entry: { app: 'app' },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  plugins: [ ... ]
};
// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    module.exports = merge(common, { /*specifics*/});
    break;
  default:
    module.exports = merge(common, { /*specifics*/});
}
```

---
### Multiple configuration file merging
Use a common setting for the basic shared configuration
- webpack.common.js

Use a configuration file for each specific settings, for example:
- webpack.dev.js
- webpack.prod.js
- webpack.test.js

Merge the common configuration into the specific configuration.
Example:

---
### Multiple configuration file merging example
##### webpack.config.js
```javascript
module.exports = require('./config/webpack.dev.js');
```

---
### Define common webpack config
#### webpack.common.js
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
```

---
### define environment config
#### webpack.dev.js
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
Merge multiple configurations
