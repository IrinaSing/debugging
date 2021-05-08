"use strict";

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = !undefined && !"";
console.assert(step0 === expected, "Step 0");

/*

*/
const step1 = !NaN || !!undefined;
console.assert(step1 === expected, "Step 1");

/*

*/
const step2 = !false && !0;
console.assert(step2 === expected, "Step 2");

/*

*/
const step3 = 5 + "5" === "55";
console.assert(step3 === expected, "Step 3");
