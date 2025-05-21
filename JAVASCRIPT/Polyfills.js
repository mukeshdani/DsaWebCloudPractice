//Polyfill for Bind
Function.prototype.myBind = function(...args){
    const fn = this;
    return function(...args2){
        return fn.apply(args[0], [...args.slice(1), ...args2]);
    }
}


//Polyfill for Call
Function.prototype.myCall = function(...args){
    fn = this;
    const result = fn(...args);
    delete fn;
    return result;
}