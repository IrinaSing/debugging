"use strict";

let userNumber = NaN;
while (true) {
  const userInput = prompt("enter a number");

  /* -- BEGIN: exit if userInput is a valid number -- */
  if (userInput === "" || userInput === null) {
    alert("nothing");
    continue;
  }

  userNumber = Number(userInput);
  if (Number.isNaN(userNumber)) {
    alert("It's not a number");
    continue;
  } else {
    break;
  }

  /* -- END -- */
}

const message = userNumber % 2 === 0 ? " is even" : " is odd";
alert(userNumber + message);
