"use strict";

// refactor this code to use && instead of a conditional

const input = "good";
const password = "pickles";
console.log(input, password);

/*let isValidPassword = typeof input === 'string';
if (isValidPassword) {
  isValidPassword = input === password;
}
*/

const isValidPassword = typeof input === "string" && input === password;
console.log(isValidPassword);
