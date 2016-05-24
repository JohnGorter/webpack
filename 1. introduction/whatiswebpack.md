### What is Webpack
> Webpack is a popular module bundler, a tool for bundling application 
> source code in convenient chunks and for loading that code from a 
> server into a browser.

---
### What is a bundle
> A bundle is a JavaScript file that incorporate assets that belong together 
> and should be served to the client in a response to a single file request. 

A bundle can include JavaScript, CSS styles, HTML, and almost any other 
kind of file.

---
### What does Webpack do
- Webpack roams over your application source code, looking for import 
statements, building a dependency graph, and emitting one (or more) 
bundles. 

- With plugin "loaders" Webpack can preprocess and minify different 
non-JavaScript files such as TypeScript, SASS, and LESS files.

---
### picture overview
<img src="./1. introduction/what-is-webpack.png" />

---
### How does Webpack does it
Webpack works with a JavaScript configuration file(s)
```
webpack.config.js.
```