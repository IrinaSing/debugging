"use strict";

let a = "z";
let b = "x";
let c = "y";
let temp;

// write some code, be sure to use temp!

// fill in the _ to pass the assertions
temp = a;
a = b;
const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

b = c;
const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

c = temp;
const isTrue3 = c === "z";
console.assert(isTrue3, "Test 3");

temp = c;
const isTrue4 = temp === _;
console.assert(isTrue4, "Test 4");
