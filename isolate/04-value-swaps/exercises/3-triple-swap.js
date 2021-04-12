"use strict";

let a = "y";
let b = "z";
let c = "x";
let temp;

// write some code, be sure to use temp!

// fill in the _ to pass the assertions
temp = a;
a = c;
const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

a = b;
b = temp;
const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

c = a;
const isTrue3 = c === "z";
console.assert(isTrue3, "Test 3");

temp = 12;
const isTrue4 = temp === 12;
console.assert(isTrue4, "Test 4");
