## Webpack-dev-server
Using Webpack development webserver

---
### Why?

- We want a webserver to serve our files (site/application)
- Preferrably we want our webpack steps to be integrated into the server
- Webpack-dev-server supports the same command line switches as webpack

---
### What is webpack-dev-server
Webpack-dev-server is a webpack integrated webserver, specificly designed for webpack

Webpack-dev-server has two enpoints
- http://localhost:8080/webpack-dev-server/
    - shows links to the bundles
    - clicking on the link shows a page that reacts upon file changes
- http://localhost:8080/
    - uses just the content of the application
    
It is possible to inline the watcher code into the root endpoint so
the content is refreshed on file changes but there is no address bar present.

---
### How to use webpack-dev-server
To start the webpack dev server use
```
webpack-dev-server
```

You have to have the npm module installed globally.

---
### Labtime
Create the webpack-dev-server setup and test it

