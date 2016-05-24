# Hot Loading

---
### Hot Module Replacement
Hot Module Replacement (HMR) exchanges, adds, or removes modules 
while an application is running without a page reload.

---
### Prerequirements

Using Plugins: http://webpack.github.io/docs/using-plugins.html
Code Splitting: http://webpack.github.io/docs/code-splitting.html
webpack-dev-server: http://webpack.github.io/docs/webpack-dev-server.html

---
### How does it work?

Webpacks adds a small HMR runtime to the bundle, during the build process, 
that runs inside your app. When the build completes, Webpack does not exit 
but stays active, watching the source files for changes. If Webpack detects
a source file change, it rebuilds only the changed module(s). 

Depending on the settings, Webpack will either send a signal to the HMR 
runtime, or the HMR runtime will poll webpack for changes. Either way, 
the changed module is sent to the HMR runtime which then tries to apply 
the hot update. First it checks whether the updated module can self-accept. 
If not, it checks those modules that have required the updated module. 

If these too do not accept the update, it bubbles up another level, to 
the modules that required the modules that required the changed module. 
This bubbling-up will continue until either the update is accepted, or 
the app entry point is reached, in which case the hot update fails.

---
### From the app view

The app code asks the HMR runtime to check for updates. The HMR runtime 
downloads the updates (async) and tells the app code that an update is 
available. The app code asks the HMR runtime to apply updates. The HMR 
runtime applies the update (sync). The app code may or may not require 
user interaction in this process (you decide).

---
### From the compiler (webpack) view

In addition to the normal assets, the compiler needs to emit the "Update" 
to allow updating the previous version to the current version. 

The "Update" contains two parts:
- the update manifest (json)
- one or multiple update chunks (js)

The manifest contains the new compilation hash and a list of all update 
chunks (2.).

The update chunks contains code for all updated modules in this chunk 
(or a flag if a module was removed).

Note: The compiler also makes sure that module and chunk ids are consistent 
Note: between these builds. It uses a "records" json file to store them between 
Note: builds (or it stores them in memory).

