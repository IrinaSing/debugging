"use strict";

let userInput = "";
let isAboutFrogs = false;
while (!isAboutFrogs) {
  userInput = prompt("Tell me smth about frogs");

  if (userInput === "" || userInput === null) {
    alert("that is not something");
    continue;
  }

  if (userInput.search(/frog/i) > -1) {
    isAboutFrogs = true;
    continue;
  }
  alert("That's not about frogs");
}
alert("I have just learned smth about frogs: " + "'" + userInput + "'");
