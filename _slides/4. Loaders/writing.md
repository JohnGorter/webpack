## Custom loaders
You can write your own loaders

---
### What is a loader
A loader is just a file that exports a function. 
The compiler calls this function and passes the result of 
the previous loader or the resource file into it

The **-this-** context of the function is filled-in with useful 
methods that allow:
- change its invocation style to async 
- get query parameter

---
### What is a loader(2)
- The first loader is passed one argument: the content of the resource file. 
- The compiler expects a result from the last loader. 
- The result should be String or Buffer (gets converted to string), 
representing the JavaScript source code 


An optional SourceMap result (as JSON object) may also be passed.

---
### What is a loader(3)
- A single result can be returned in sync mode. 
- Multiple results 
    - In async mode this.async() must be called. 
    - this.callback must be called. 

Errors can be thrown in sync mode or 
the this.callback can be called with the error.

---
### Example sync loader
Sync loader returns results synchronously

```
module.exports = function(content) {
    return someSyncOperation(content);
};
```

---
### Example Async loader
Async loader returns value through callback

```
module.exports = function(content) {
    var callback = this.async();
    if(!callback) return someSyncOperation(content);
    someAsyncOperation(content, function(err, result) {
        if(err) return callback(err);
        callback(null, result);
    });
};
```

---
### Example Raw loader
- By default the resource file is passed as String(utf-8) to the loader 

- By setting raw to true the loader is passed the raw Buffer

- Every loader is allowed to deliver its result as String or as Buffer

- The compiler converts them between loaders.

```
module.exports = function(content) {
    assert(content instanceof Buffer);
    return someSyncOperation(content);
    // return value can be a Buffer too
    // This is also allowed if loader is not "raw"
};
module.exports.raw = true;
```

---
### Pitching loader

- Loaders are called from right to left
- In some cases loaders do not care about the results of the previous loader or the resource
- Pitch method on loaders is called from left to right before loaders are called

If a loader returns result in the pitch method the process skips the remaining loaders
continuing with the calls to the more left loaders 

- Data can be passed between pitch and normal call.

---
### Pitching loader(2)
It's like the two phases of event bubbling...
```
a!b!c!resource
```

- pitch a
    - pitch b
        - pitch c
            - read file resource (adds resource to dependencies)
        - run c
    - run b
- run a

---
### Pitching loader(3)

When a loader return something in the pitch phase the process continues 
with the normal phase of the next loader... 

- pitch a
    - pitch b (returns something)
- run a

---
### Example pitching loader

```
module.exports = function(contnt) {
    return someSyncOp(contnt, this.data.value);
};
module.exports.pitch = function(remainReq, preceedReq, data) {
    if(someCondition()) {
        // fast exit
        return "module.exports = require(" + JSON.stringify("-!" + remainReq) + ");";
    }
    data.value = 42;
};
```

---
### Labtime
Writing a custom loader in webpack
