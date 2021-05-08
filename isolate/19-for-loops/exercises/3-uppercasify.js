"use strict";

/* Uppercaseify

  you can use for loops to do some logic for each element in a string

  this loop should create a new string with each character upper-cased

*/

const lowerCaseString = "abcde";
console.log("lowerCaseString:", lowerCaseString);

let upperCaseString = "";

for (let stepper = 0; stepper < lowerCaseString.length; stepper++) {
  const nextLetter = lowerCaseString[stepper];
  const letterUpperCased = nextLetter.toUpperCase();
  upperCaseString = upperCaseString + letterUpperCased;

  console.log(stepper); // your stepper variable
  console.log("upperCaseString:", upperCaseString);
}

console.assert(
  upperCaseString === "ABCDE",
  "upper case string is all upper case"
);
