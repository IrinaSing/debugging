"use strict";

// write code to pass asserts a, b, c
// fill in the blanks for d and temp

// leave this code as it is
let a = "y";
let b = "z";
let c = "x";
let temp;

temp = a;
a = b;
const d = a;

// write some code, be sure to use temp!

// fill in in the _'s to pass the final assertions

a = c;
const isTrue1 = a === "x";
console.assert(isTrue1, "Test 1");

b = temp;
const isTrue2 = b === "y";
console.assert(isTrue2, "Test 2");

c = d;
const isTrue3 = c === "z";
console.assert(isTrue3, "Test 3");

const isTrue4 = d === c;
console.assert(isTrue4, "Test 4");

const isTrue5 = temp === b;
console.assert(isTrue5, "Test 5");
