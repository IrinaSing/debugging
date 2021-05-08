"use strict";

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = 5;
const value2 = NaN;
let path = "";

if (value1 && !value2) {
  path = "if";
} else if (!value1 || !value2) {
  path = "else if 1";
} else if (value2 && !value1) {
  path = "else if 2";
} else {
  path = "else";
}

console.log(path);

/*
to execute "else if 1"
const value1 = undefined;
const value2 = 0;

"else if 2" - unreacheable, because if value1 is true, then it will execute
the previous path. 

to execute "else"
const value1 = 16;
const value2 = 16;
*/
