# Validate webpack configuration
using webpack-validator

---
### What is webpack-validator
To make it easier to develop our configuration, we can integrate a tool 
known as webpack-validator to our project. It will validate the 
configuration against a schema and warn if we are trying to do something 
not sensible. This takes some pain out of learning and using Webpack.

---
### Prerequisites
Install:

```javascript
npm i webpack-validator --save-dev
```

---
### Use it
Integrating it to our project is straight-forward:

webpack.config.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

...

module.exports = validate(config);
```
---
### Test it 
If you break your Webpack configuration somehow after doing this, 
the validator will likely notice and give you a nice validation 
error to fix.

### Test it 
If you break your Webpack configuration somehow after doing this, 
the validator will likely notice and give you a nice validation 
error to fix.

---
### Labtime
Test a configuration with webpack-validator, you're up next bro