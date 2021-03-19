console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;


function addItem(item) {
  basket.push(item);
  if (isFull() === true) {
    console.log("Basket is full!")
    return false;
  }
  return true;.
}

addItem('Bread');
addItem('Cheese');
addItem('Sandwich');
addItem('Apple');


function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

// function list() {
//   for (let item1 of basket) {
//     console.log(item1);
//   }
// }
// list()

listItems();

function empty() {
  basket = [];
}

empty();
console.log(basket);


//STRETCH GOOOOOOOOOOOOOOOOOOOOOAAAAALS

function isFull() {
  if (basket.length < maxItems); {
    return false;
  } {
    return true;
  }
}
console.log(isFull());
