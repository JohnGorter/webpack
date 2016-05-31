## Loaders
File preprocessors

---
### What are loaders

Loaders allow you to preprocess files as you require() or “load” them. 
Loaders can transform files from a different 
language like
- CoffeeScript to JavaScript
- inline images as data URLs

Loaders even allow you to do things like require() css 
files right in your JavaScript!

--- 
### How to use

To tell Webpack to transform a module with a loader, you can specify the 
loader in the module request

```
var moduleWithOneLoader = require("my-loader!./my-awesome-module");
```

Or with a relative path

```
require("./loaders/my-loader!./my-awesome-module");
```

---
### List of loaders
A lot of prebuilt loaders in the following categories
- Basic -> json, imports, val, raw, etc
- Packaging -> image, , extract, file, modernizr, etc
- Dialects -> babel, coffee, typescript, sweetjs, etc
- Templating -> html, dom, riot, dust, markdown, etc
- Styling -> bootstrap-sass, css, less, rework, etc
- Translation -> po, gettext, amdi18n-loader, etc
- Support -> mocha, falafel, csslint, standard, etc

complete list

https://github.com/webpack/docs/wiki/list-of-loaders

---
### Use a loader
- Choose a loader from the list, for example typescript-loader
- Install it using
```
npm install typescript-loader --save-dev
```
- use it in your config
```
module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'typescript-loader'
      }
    ]
  },
```

---
### Use a loader(2)
- Choose a loader from the list, for example tojson-loader
- Install it using
```
npm install typescript-loader --save-dev
```
- use it in your config
```
// webpack.config.js
module.exports = {
  module: {
    loaders: [
      {
        // Use *.json.js extension
        test: /\.json\.js/,
        loader: 'tojson'
      }
    ]
  }
},
```

---
### Use a loader(3)
- Use it

```javascript
// file: data.json.js
var fs = require('fs')
var readme = fs.readFileSync(__dirname + '/../../Readme.md', 'utf8')
readme = readme.split('\n')[0] // (just grab header for demo)

// any other dependencies that are only used in here won't be included in bundle
var tape = require('tape') // some random dependency

// whatever the value of module.exports is will be serialised to JSON
module.exports = {
  readme: readme,
  tape: tape, // tape happens to be a function so it won't serialise.
  random: Math.random(), // will be fixed to whatever value is generated at compile-time
}
```

```
// file: index.js
console.log(require('./data.json.js'))
```

---
### Use a loader(4)
- Outputs
```
...
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {
    console.log(__webpack_require__(1))
/***/ },
/* 1 */
/***/ function(module, exports) {
    module.exports = {"readme":"# tojson-loader","random":0.5418716457206756}
/***/ }
/******/ ]);
```
---
### Chaining loaders
Loaders can be also be chained together

```
require("style-loader!css-loader!less-loader!./my-styles.less");
```

- Helpful for applying multiple transformations
- Applied right to left (from the file, back)

---
### Parameters

Loaders can accept query parameters

```
require("loader?with=parameter!./file");
```

- Format of the query string is up to the loader
- Most loaders support the traditional query string format

---
### Loaders by config

We do not want to specify loaders in each module request
  - brittle and repetitive
  - avoid build specific syntax to the code
  
  
 Apply loaders to different file types in config!
 
 ```
{
    module: {
        loaders: [
            { test: /\.coffee$/, loader: "coffee-loader" }
        ],
        preLoaders: [
            { test: /\.coffee$/, loader: "coffee-hint-loader" }
        ]
    }
};
```

---
### Loader order
For each file, loaders are executed in the following order

1. preloaders from config
2. loaders from config
3. loaders specified in request (e.g. require('raw!./file.js'))
4. postLoaders from config

---
### Override loader order
You can override the config loader order in the
module request to suit special cases.

Disable configured preLoaders

```
require("!raw!./script.coffee")
```

Disable all loaders specified in the configuration
```
require("!!raw!./script.coffee")
```

Disable configured preLoaders and loaders 
but not the postLoaders
```
require("-!raw!./script.coffee")
```

---
### Labtime
Using loaders in webpack