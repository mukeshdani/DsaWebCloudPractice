Module Wrapper in Node.js

Node.JS doest not run our code directly. it Wraps the entire code inside a function before execution.

This function is termed as Module Wrapper Function

(function(export, require, module, __filename, __dirname){
    //module code
});

1. Module has an object called export which has a default value of {}
2. require is used to import other modules into your file/app
3. _filename and __dirname are the path of the current file and the current working directory. 