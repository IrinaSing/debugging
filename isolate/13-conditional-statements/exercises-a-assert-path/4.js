"use strict";

// are there any unreachable paths?

const value1 = true;
const value2 = true;
let path = "";

//unreacheable
if (value1 && !value2) {
  path = "if";
  //unreacheable
} else if (!value1 || !value2) {
  path = "else if 1";
  //unreacheable
} else if (value2 && !value1) {
  path = "else if 2";
} else {
  path = "else";
}

console.assert(path === "else");
