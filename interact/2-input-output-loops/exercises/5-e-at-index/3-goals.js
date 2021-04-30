"use strict";

let validInput = "";

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`
  );

  /* -- BEGIN: validate input -- */
  if (userInput === "" || userInput === null) {
    alert("There is nothing");
  } else if (userInput.length < index) {
    alert("Too short");
  } else if (userInput[index] === "e" || userInput[index] === "E") {
    isValid = true;
    validInput = userInput;
  } else {
    alert(`There is no "e" or "E" as the ${index}th letter`);
  }
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
