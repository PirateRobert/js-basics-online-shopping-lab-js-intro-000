var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newbie = {[item]: Math.floor(Math.random() * 100)}
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
  var moola = 0
  for (let i = 0; i < cart.length;i++){
    var somearray = Object.keys(getCart()[i])
    var num = parseInt(getCart()[i][somearray[0]])
    moola += num
  return moola
  }
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)){
    delete cart[item]
    return cart
  } else{
    console.log("That item is not in your cart.")
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
    return
  } else{
    var moola = total()
    console.log(`Your total cost is ${moola}, which will be charged to the card ${cardNumber}.`)
    var cartarray = Object.keys(cart)
    for (let i = 0;i<cartarray.length;i++){
      removeFromCart(cartarray[i])
    return cart
    }
  }
}
