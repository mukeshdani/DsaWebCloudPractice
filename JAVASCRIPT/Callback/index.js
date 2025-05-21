console.log("Mueksh Dani");
setTimeout(function () {
    console.log("Hello from function")
}, 5000)
console.log("Mukesh Dani")

const card = ["shoes", "pants", "kurta"];

//Callback hell: This is First Problem with CallBack
//also know as Pyramid of Doom
api.createOrder(card, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        })
    });
});

//Inversion of control
//kiel simson explain this 
//we give the responsiblity to creteOrderapi 
//We loose the control
//their might be some bugs
//we don't know what is written in creteOrder api
// may be proceedToPayment call 2 time 
api.createOrder(card, function () {
    api.proceedToPayment()
});

