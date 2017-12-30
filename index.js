var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100)
 var newbie = {[item]: [price]}
 cart.push(newbie)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var string = `In your cart, you have`
  for (let i = 0;i<cart.length;i++){

  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
