"use strict";

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = _;
const value2 = _;
let path = "";

if (value1 === value2) {
  path = "if";
} else if (!value1 === !value2) {
  path = "else if 1";
} else if (Number(value2) === Number(value1)) {
  path = "else if 2";
} else if (!(value1 || value2)) {
  path = "else if 3";
} else {
  path = "else";
}

console.log(path);

/*
"if"
const value1 = 1;
const value2 = 1;


"else if 1"
const value1 = 0;
const value2 = NaN;

const value1 = true;
const value2 = 3;

unreacheable else if 2 and 3

"else"
const value1 = 0;
const value2 = 3;

const value1 = NaN;
const value2 = "true";
*/
