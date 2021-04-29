"use strict";

/* look out for:

  - logical operators
  - boolean flag values

*/

let userInput = "";
let inputIsAboutFrogs = false;
while (!inputIsAboutFrogs) {
  userInput = prompt("tell me something about frogs");

  if (userInput === "" || userInput === null) {
    alert("that is not something");
  }
  // regular expression: this works!
  else if (userInput.search(/frog/i) > -1) {
    inputIsAboutFrogs = true;
  } else {
    alert("nope, not about frogs.  try again.");
  }
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
