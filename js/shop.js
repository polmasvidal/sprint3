// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// ** Nivell I **

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for(var i = 0; i < products.length; i++) {
        if(id === (i+1)){
            cartList.push(products[i]);
        }
    }
    console.log(cartList);
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(var i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    return total;
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for(var product in cartList) {
        if(cart.includes(cartList[product])){
            cartList[product].quantity ++;
        } else {
            cartList[product].quantity = 1;
            cart.push(cartList[product]);
        }
    }

    console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(var i = 0; i < cart.length; i++) {
        if (cart[i].id === 1) {
            if (cart[i].quantity >= 3) {
                cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            }
        } else if (cart[i].id === 3) {
            if (cart[i].quantity >= 10) {
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price * 2/3;
            }
        }
    }
    console.log(cart);
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    var itemToAdd;
     for(var i = 0; i < products.length; i++) {
         if(id === (i+1)) {
             itemToAdd = products[id];
         } if(cart.includes(itemToAdd)) {
             cart[products].quantity ++;
             cart[products].subtotal = cart[products].price * cart[products].quantity; 
         } else {
             cart.push(itemToAdd);
             cart[cart.length-1].quantity = 1;
             cart[cart.length-1].subtotal = cart[cart.length-1].price;
         }
     }
     console.log(cart);
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    var itemToRemove;
     for(var i = 0; i < products.length; i++) {
         if(id === (i+1)) {
             itemToRemove = products[id];
         } if(cart.includes(itemToRemove) && itemToRemove.quantity > 1) {
             cart[products].quantity --;
             cart[products].subtotal = cart[products].price * cart[products].quantity; 
             cart[products].subtotalWithDiscount = cart[products].subtotal;
         } else if (cart.includes(itemToRemove) && itemToRemove.quantity === 1) {
             cart.splice(itemToRemove, itemToRemove+1);
         } else {
             alert('This item is not in your cart.')
         }
     }
     console.log(cart);
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


function open_modal(){
	console.log("Open Modal");
}