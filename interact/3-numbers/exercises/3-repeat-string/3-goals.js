"use strict";

let userInput = "";
let repetitions = NaN;
while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt("Enter phrase to repeat");

  if (userInput === "" || userInput === null) {
    alert("Nothing");
    continue;
  }

  let repetitionsInput = "";
  repetitionsInput = prompt("Enter number of repetitions");
  repetitions = Number(repetitionsInput);

  /* -- END -- */

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* -- BEGIN: ask the user to confirm their input -- */
  let userConfirmed = confirm(`Is this correct? ${userInput}, ${repetitions}`);
  if (userConfirmed) {
    break;
  }
  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */
let repeatedInput = "";
for (let i = 0; i < repetitions; i++) {
  repeatedInput = repeatedInput + userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
