"use strict";

let userInput = "";
let repetitions = NaN;

while (true) {
  userInput = prompt("Enter phrase to repeat");

  if (userInput === "" || userInput === null) {
    alert("That is nothing!");
    continue;
  }

  let repetitionsInput = "";
  repetitionsInput = prompt("How many times to repeat?");
  repetitions = Number(repetitionsInput);

  if (Number.isNaN(repetitions)) {
    alert("It is not a number");
    continue;
  }

  const userConfirmed = confirm(
    "Is this correct?" + userInput + repetitions + "?"
  );
  if (userConfirmed) {
    break;
  }
}

let repeatedInput = "";

for (let i = 0; i < repetitions; i++) {
  repeatedInput = repeatedInput + userInput;
}

alert(`${userInput} '-->' ${repeatedInput}`);
