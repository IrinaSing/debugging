"use strict";

// write lots of comments!  explain your thinking at each step

const expected = NaN;

// the original expression
const step0 = -(null + "10") * 15;
console.assert(Object.is(step0, expected), "Step 0");

/*

*/
const step1 = undefined + 5;
console.assert(Object.is(step1, expected), "Step 1");

/*

*/
const step2 = "ty" * 1 + 13;
console.assert(Object.is(step2, expected), "Step 2");

/*

*/
const step3 = NaN + 4 * 5;
console.assert(Object.is(step3, expected), "Step 3");
