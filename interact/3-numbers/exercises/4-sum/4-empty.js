"use strict";

const instructions = "instructions";
alert(instructions);

let sum = 0;
let userInput = "";
let isDone = false;

while (!isDone) {
  userInput = prompt("Enter number to sum");

  if (userInput === "" || userInput === null) {
    alert("Empty. Try again");
  } else if (userInput.toLowerCase() === "done") {
    isDone = true;
  } else {
    const nextNumber = Number(userInput);
    if (Number.isNaN(nextNumber)) {
      alert("Not a number. Ignored");
      continue;
    }
    sum += nextNumber;
  }
}

alert("Sum of your numbers is " + sum);
