"use strict";

// refactor this code to use a conditional instead of a ternary

const isVegetarian = true;
console.log(isVegetarian);

/*
const favoriteFood = isVegetarian ? 'beans' : 'bacon';
*/

let favoriteFood;
if (isVegetarian) {
  favoriteFood = "beans";
} else {
  favoriteFood = "bacon";
}

console.log(favoriteFood);
