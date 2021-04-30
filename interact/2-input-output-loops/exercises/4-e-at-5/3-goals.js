"use strict";

let validInput = "";
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === "" || userInput === null) {
    alert("Empty");
  } else if (userInput.length < 5) {
    alert("Too short");
  } else if (userInput[4] === "e" || userInput[4] === "E") {
    isNotValid = false;
    validInput = userInput;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
