// const cart = ["shoes","pants","kurta"];

// ceateOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });//passing a function


// const promise = createOrder(cart);
// //{data:orderDetails}

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })//attaching the function

const GITHUB_API = "https://api.github.com/users/mukeshdani"

const user = fetch(GITHUB_API);

console.log(user);





