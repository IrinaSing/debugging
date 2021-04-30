"use strict";

let userInput = "";
let userConfirmed = false;

while (!userConfirmed) {
  userInput = prompt("Enter your name");

  if (userInput === "" || userInput === null) {
    alert("That's not something");
    continue;
  }

  const confirmMessage =
    "Is this your name" + " " + '"' + userInput + '"' + "?";
  userConfirmed = confirm(confirmMessage);
  if (userConfirmed) {
    break;
  }
}

alert("Your name is" + " " + userInput);
