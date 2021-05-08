"use strict";

// refactor this code to use a condition instead of ||

const firstName = "A";
const lastName = "A";
console.log(firstName, lastName);

/*
const hasAnAName = firstName[0] === 'A' || lastName[0] === 'A';
*/
let hasAnAName = firstName[0] === "A";
if (hasAnAName) {
  hasAnAName = lastName[0] === "A";
}

console.log(hasAnAName);
