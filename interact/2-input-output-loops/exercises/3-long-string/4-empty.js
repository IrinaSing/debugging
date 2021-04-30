"use strict";

let userInput = "";
let isTooShort = true;

while (isTooShort) {
  userInput = prompt("Enter smth longer than 5 symbols");

  if (userInput === "" || userInput === null) {
    alert("That's not something");
  } else if (userInput.length <= 5) {
    alert("Is too short");
  } else {
    break;
  }
}
alert("Your input is" + " " + userInput.length + " " + "long");
