"use strict";

let userInput = "";
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt("Enter your name");

  if (userInput === "" || userInput === null) {
    alert("That's not smth");
    continue;
  }

  isValidName = confirm("Is your name" + " " + userInput + "?");

  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
