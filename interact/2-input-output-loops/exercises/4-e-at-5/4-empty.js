"use strict";

/*let isValid = false;
let validInput = "";

while (!isValid) {
  const userInput = prompt("Type smth that has 'e' or 'E' on the 5th place");

  if (userInput === "" || userInput === null) {
    alert("Nothing");
  } else if (userInput.length < 5) {
    alert("Too short");
  } else if (userInput[4] === "e" || userInput[4] === "E") {
    isValid = true;
    validInput = userInput;
  } else {
    alert("There's no 'e' or 'E' on the 5th place");
  }
}
alert('done: "' + validInput + '"');
*/
let validInput = "";
while (true) {
  const userInput = prompt("Type smth that has 'e' or 'E' on the 5th place");

  if (userInput === "" || userInput === null) {
    alert("Nothing");
    continue;
  }
  if (userInput.length < 5) {
    alert("Too short");
    continue;
  }
  if (userInput[4] === "e" || userInput[4] === "E") {
    validInput = userInput;
    break;
  }

  alert('input has no "e" or "E" as the 5th character');
}

alert('done: "' + validInput + '"');
