"use strict";

let validInput = "";
let index = 0;
while (validInput === "") {
  index = index + 1;
  const userInput = prompt(
    `Enter something with "e" or "E" on the ${index}th place`
  );

  if (userInput === "" || userInput === null) {
    alert("That's nothing");
  } else if (userInput.length < index) {
    alert("Too short");
  } else if (userInput[index] === "e" || userInput[index] === "E") {
    validInput = userInput;
  } else {
    alert(`There is no "e" or "E" as the ${index}th letter`);
  }
}
alert("Done:" + validInput);
