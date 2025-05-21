
setTimeout(()=>{
    console.log("Hello from setTimeout");
}, 1000);

setInterval(()=>{
    console.log("Hello from setInterval");
}, 1000);

Promise.resolve("Hello from Promise").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
console.log("Hello from Global Context");
