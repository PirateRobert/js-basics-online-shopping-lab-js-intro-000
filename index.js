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
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
    return
  }
  var cartarray = Object.keys(cart)
  var string = `In your cart, you have`
  for (let i = 0;i<cart.length;i++){
    if (i === 0){
      string += ` ${cartarray[i]} at $${cart[cartarray[i]]}`
    }else if (i < cart.length-1){
      string +=`, ${cartarray[i]} at $${cart[cartarray[i]]}`
    }
    else{
      string += `, and ${cartarray[i]} at $${cart[cartarray[i]]}.`
    }
  }
  console.log(string)
  return
}

function total() {
  var cartarray = Object.keys(cart)
  var moola = 0
  for (let i = 0; i<cartarray.length;i++){
    var findem = cart[cartarray[i]]
    moola += parseInt(findem)
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
