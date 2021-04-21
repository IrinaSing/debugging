"use strict";

// refactor this code to use a conditional instead of &&

const a = 1123;
console.log(a);

/*const isBigNumber = typeof a === 'number' && a > 1000;
 */

let isBigNumber = typeof a === "number";
if (isBigNumber) {
  isBigNumber = a > 1000;
}
console.log(isBigNumber);
