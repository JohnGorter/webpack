#Config Splitting
More complex scenario's require different setups:
- Development environments needs debugging info 
- Test environments run tests afterwards
- Production environments uglify and minify JavaScript

---
#prerequisites
- Node.JS
[https://nodejs.org/en/](https://nodejs.org/en/)
- Webpack

``` 
npm install webpack --save
```

---
###Test webpack
- Create a javascript file, test.js
- Run webpack command
```
    webpack ./test.js bundle.js
```
- Check the output, should be like:
```
    Version: webpack 1.12.11
    Time: 51ms
    Asset     Size  Chunks             Chunk Names
    bundle.js  1.42 kB       0  [emitted]  main
    chunk    {0} bundle.js (main) 28 bytes [rendered]
    [0] ./test.js 28 bytes {0} [built]
```
- and of course there should be a generated bundle.js 

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

