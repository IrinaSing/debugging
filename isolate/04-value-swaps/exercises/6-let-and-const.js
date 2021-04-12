"use strict";

// write code to pass asserts a and b
// fill in the blanks for c and temp

// leave this code as it is
let a = "y";
let b = "x";
let temp;

temp = a; // "y"
const c = temp; // "y"

// write some code, be sure to use temp!

// replace the _ with a value to pass the assertions

a = b;
const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

b = temp;
const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = c === temp;
console.assert(isTrue3, "Test 3");

const isTrue4 = temp === c;
console.assert(isTrue4, "Test 4");
