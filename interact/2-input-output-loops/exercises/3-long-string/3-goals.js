"use strict";

let userInput = "";
while (userInput === "") {
  /* -- BEGIN: validate input -- */
  userInput = prompt("enter smth longer than 5");

  if (userInput === null || userInput === "") {
    alert("Nothing");
    userInput = "";
  } else if (userInput.length <= 5) {
    alert("It is too short");
    userInput = "";
  } else {
    //
  }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + " characters long";
alert(finalMessage);
