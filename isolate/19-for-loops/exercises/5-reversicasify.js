"use strict";

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = "abcde";
console.log("originalString:", originalString);

let reverseUpperCase = "";

for (let i = originalString.length - 1; i >= 0; i = i - 1) {
  const reverser = originalString[i];
  const nextLetter = reverser.toUpperCase();
  reverseUpperCase = reverseUpperCase + nextLetter;

  console.log(i); // your stepper variable
  console.log("reverseUpperCase:", reverseUpperCase);
}

console.assert(
  reverseUpperCase === "EDCBA",
  "reversed string is the original reversed"
);
