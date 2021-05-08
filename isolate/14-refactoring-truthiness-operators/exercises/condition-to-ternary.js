"use strict";

// refactor this code to use a _?_:_ instead of a conditional

const isLoggedIn = true;
const secretInformation = "my small secret";
const warningMessage = "you are not logged in";
console.log(isLoggedIn, secretInformation, warningMessage);

/*
let toDisplay;
if (isLoggedIn) {
  toDisplay = secretInformation;
} else {
  toDisplay = warningMessage;
}
*/

const toDisplay = isLoggedIn ? secretInformation : warningMessage;
console.log(toDisplay);
