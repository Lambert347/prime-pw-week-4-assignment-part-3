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

//Function that lists each individual item present in the basket on a separate line.
function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}


listItems();

//Function that "empties" the basket by setting the basket array to a new, empty array.
function empty() {
  basket = [];
}


//The function does empty the basket properly, the only reason that the call is a comment is so that the functions below work with the basket array from above.
// empty();
console.log(basket);


//STRETCH GOAL QUESTIONS

//Function to check if the basket is full, that is if it has 5 items or more present. If so, the function returns true. If not, it returns false.
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
    console.log('Item not found');
  }
  //If the item in the argument is present, then the item will be removed from the array using splice.
  else {
    basket.splice(item, 1);
    return item;
  }
}

//Function takes the argument Bread to remove it from the basket, and then console logs the new basket. The basket now has no bread in it.
console.log(removeItem('Bread'));
console.log(basket);

//Function attempts to remove an item not present in the basket. Since it is not there, the function returns null.
console.log(removeItem('Pizza'));
console.log(basket);
