#Basic setup
 
---
#prerequisites
- Node.JS
[https://nodejs.org/en/](https://nodejs.org/en/)
- Webpack

``` 
npm install webpack --save
```

---
###test webpack
- Create a javascript file, test.js
- Run webpack command
    webpack ./test.js bundle.js
- Check the output, should be like:
    Version: webpack 1.12.11
    Time: 51ms
    Asset     Size  Chunks             Chunk Names
    bundle.js  1.42 kB       0  [emitted]  main
    chunk    {0} bundle.js (main) 28 bytes [rendered]
    [0] ./test.js 28 bytes {0} [built]
- and of course there should be a generated bundle.js 

---
###sample webpack.conf.js
