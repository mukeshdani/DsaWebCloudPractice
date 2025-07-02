//Call, Apply and Bind 
//Call

// import { myBind } from './Polyfill_Bind.js';
// or if using CommonJS:
const { myBind } = require('./Polyfills.js');

//call
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}
var person = {
    name: 'Mukesh'
};

greet.call(person, 'Hello from Call Method', '!'); // Hello, John!

//Apply 
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}
var person = {
    name: 'Suraj'
};  
greet.apply(person, ['Hello from Apply Method', '!']); // Hello, John!
//Bind
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}
var person = {
    name: 'Abhishek'
};
var greetJohn = greet.bind(person, 'Hello from Bind Method');
greetJohn('!'); // Hello, John!    

//Example
function add(a, b) {
    return a + b;
}   
const add5 = add.myBind(null, 5);
console.log(add5(10)); // 15




var greetJohn = greet.myBind(person, 'Hello from myBind Method');
greetJohn('!'); // Hello, John!    


