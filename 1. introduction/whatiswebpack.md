## Webpack introduction
What is webpack
---
### What is Webpack
From the docs:
> Webpack is a popular module bundler, a tool for bundling application 
> source code in convenient chunks and for loading that code from a 
> server into a browser.

---
### Why do we need Webpack
Websites and applications contain
- more and more on JavaScipt

We need
- Modularisation

Note:
This results in larger amounts of code on the client side. Generally speaking, utilising a 
module system should enhance not only the development but also the user experience.
If you happen to be working with a large codebase or just researching, you will no doubt 
understand it is critical to keep your code organised. One of the best ways to handle the 
organisation of JavaScript it to break your code into modules.
When it comes to module systems there are a few popular ones which you might of either 
used or heard about like Browserify or RequireJS. Both of these are extremely helpful and 
do a great job but webpack does some extra radness. 

--- 
### Why do we need Webpack
Webpack enables professional and maintainable JavaScript programming
> Webpack enables us to write JavaScript code into maintainable modules
> while taking care of packaging and bundeling it for runtime use. 

---
### Why do we need Webpack
Webpack supports:
- module traversing and bundeling, you can organise code into modules
- on demand loading, reducing the initial load time of application
- module hashing, make chunks cache friendly
- plugins, making it super extensible
- loaders, it can build and bundle CSS, compile-to-JS languages (CoffeeScript), 
images and more

---
### What does Webpack do
- Webpack roams over your application source code, looking for import 
statements, building a dependency graph, and emitting one (or more) 
bundles. 

- With plugin "loaders" Webpack can preprocess and minify different 
non-JavaScript files such as TypeScript, SASS, and LESS files.

---
### What is a bundle
> A bundle is a JavaScript file that incorporate assets that belong together 
> and should be served to the client in a response to a single file request. 

A bundle can include JavaScript, CSS styles, HTML, and almost any other 
kind of file.


---
### picture overview
<img src="./1. introduction/what-is-webpack.png" />

---
### How does Webpack does it
Webpack works with a JavaScript configuration file(s)
```
webpack.config.js
```

You just have to call it:
```
webpack
```