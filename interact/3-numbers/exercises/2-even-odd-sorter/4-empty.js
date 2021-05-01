"use strict";

let userNumber = NaN;
while (true) {
  let userInput = prompt("Enter a number");

  if (userInput === "" || userInput === null) {
    alert("Nothing");
    continue;
  }

  userNumber = Number(userInput);
  if (Number.isNaN(userNumber)) {
    alert("That is not a number");
    continue;
  } else {
    break;
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + " is even");
} else {
  alert(userNumber + " is odd");
}
