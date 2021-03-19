console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
  //Checks if the basket array is full by running the isFull function. If it is, then the addItem function prints the message that the basket is full and returns false.
  if (isFull() === true) {
    console.log('Basket is full!')
    return false;
  //If isFull returns false, then the addItem function adds the item to the array and returns true; signalling that the item has been added to the array.
  }
  basket.push(item);
  return true;
}

console.log(addItem('Bread'));
console.log(addItem('Cheese'));
console.log(addItem('Sandwich'));
console.log(addItem('Apple'));
console.log(addItem('Pasta'));
console.log(addItem('Coffee'));
//When checking the basket via console.log, coffee is not present because the basket is determined to be full. There are not enough spaces to stuff coffee beans in there.
console.log(basket);


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


function empty2(array) {
  array.length = 0;
}

console.log(basket);


//STRETCH GOOOOOOOOOOOOOOOOOOOOOAAAAALS

function isFull() {
  if (basket.length >= maxItems) {
    return true;
  }
  return false;
}


//Function checks the basket if the item in the argument is present. If the item's index is -1, that means that the item is not present and the function will return null.
function removeItem(item) {
  if (basket.indexOf(item) === -1) {
    return null;
  }
  //If the item in the argument is present, then the item will be removed from the array using splice.
  basket.splice(item, 1);
}

//Function takes the argument Bread to remove it from the basket, and then console logs the new basket. The basket now has no bread in it.
removeItem('Bread');
console.log(basket);
