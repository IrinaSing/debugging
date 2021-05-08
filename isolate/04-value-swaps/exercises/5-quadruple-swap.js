"use strict";

let a = "y";
let b = "w";
let c = "z";
let d = "x";
let temp;

// write some code, be sure to use temp!

// fill in the final _ to pass the assertions

temp = a;
a = b;
const isTrue1 = a === "w";
console.assert(isTrue1, "Test 1");

b = d;
const isTrue2 = b === "x";
console.assert(isTrue2, "Test 2");

b = c;
c = temp;
const isTrue3 = c === "y";
console.assert(isTrue3, "Test 3");

c = d;
d = b;
const isTrue4 = d === "z";
console.assert(isTrue4, "Test 4");

b = temp;
const isTrue5 = temp === b;
