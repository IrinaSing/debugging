"use strict";

// write lots of comments!  explain your thinking at each step

const a = "asdf";
const b = "14";

const expected = false;

// the original expression
const step0 = Boolean(a) !== Boolean(b);
console.assert(step0 === expected, "Step 0");

/*

*/
const step1 = Number(a) === Number(b);
console.assert(step1 === expected, "Step 1");

/*

*/
const step2 = a + b === "14";
console.assert(step2 === expected, "Step 2");

/*

*/
const step3 = _;
console.assert(step3 === expected, "Step 3");
