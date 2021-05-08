"use strict";

let a = "y";
let b = "x";
let temp;

// write some code, be sure to use temp!

// fill in the _ to pass the assertions

temp = a;
a = b;
const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

b = temp;
const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

const isTrue3 = temp === "y";
console.assert(isTrue3, "Test 3");
