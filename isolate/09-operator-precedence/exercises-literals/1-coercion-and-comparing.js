"use strict";

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, "Step 0");
/*
checking typeof NaN - number
checking typeof infinity - number
strict equality between left and right parts (number === number) -> true
result of step0 compared to value of expected (true === true)
consol returns true.
*/

const step1 = typeof "5" === typeof "aert"; // strings
console.assert(step1 === expected, "Step 1");
/*
definition of left side typeof "5" -> string
definition of right side typeof "aert" -> string
strict equality between right and left returns true.
strict equality between expected and step1 returns true
*/

const step2 = "boolean" === typeof !null;
console.assert(step2 === expected, "Step 2");
/*
right side: reverse !null to true
typeof boolean
comparing left to right, boolean to boolean - returns true
result is strictly equal to expected.
*/

const step3 = true || false;
console.assert(step3 === expected, "Step 3");
/*
checking left, it is equal to true, so the program does not check right.
true is equal to true - value of expected variable.

*/
