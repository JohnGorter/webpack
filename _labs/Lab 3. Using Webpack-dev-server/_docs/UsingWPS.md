## Lab 3. Using Webpack-dev-server
In this lab you will install all required prerequisites and
test the setup of webpack-dev-server.
> duration: 30 minutes

### Step 1. Install the requirements
Create or navigate to the directory named 'webpack_labs'.
Install NodeJS from it's website and install webpack-dev-server using
```
$ sudo npm install webpack-dev-server -g
$ sudo npm install webpack -g
```

Run the webpack-dev-server and test to see if all went well.

### Step 2. Change modules while running the server
The webpack-dev-server watches for changes of the files and reloads them 
when changed.


Create or navigate to the directory named 'webpack_labs'.
Install NodeJS from it's website and install webpack-dev-server using
```
$ sudo npm install webpack-dev-server -g
$ sudo npm install webpack -g
```

Create a package.json by using 
```javascript
npm init
```
Give appropriate values for the questions asked.

Create a file 'test.js' inside your current folder and write the following code
```javascript
console.log('test');
```
Save the file and run the command to build the bundle.js. Use your favorite text editor to inspect 
the generated file. Notice how the bundled file is wrapped into a module so when 
included into a page for example, the generated bundle does not pollute the global 
namespace.

Run the file using the following command:
```
$ node ./bundle.js
```
If all went well, the output should display 'test'
