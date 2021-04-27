"use strict";

const instructions =
  "Remembery, the game of remembering.\n\n" +
  "You will be prompted to enter 3 phrases.\n" +
  "next you will be prompted to remember one of them\n\n" +
  "if you enter it exactly, you win!";
alert(instructions);

let input1 = null;
while (input1 === "" || input1 === null) {
  input1 = prompt("enter your first secret phrase:");
}
let input2 = null;
while (input2 === "" || input2 === null) {
  input2 = prompt("enter your second secret phrase:");
}
let input3 = null;
while (input3 === "" || input3 === null) {
  input3 = prompt("enter your third secret phrase:");
}

alert("all saved! get ready to remember");

const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * 3;
const randomFrom1To3 = Math.ceil(decimalTimes3); //refactoring

let phraseToGuess = "";
if (randomFrom1To3 === 1) {
  phraseToGuess = input1;
} else if (randomFrom1To3 === 2) {
  phraseToGuess = input2;
} else if (randomFrom1To3 === 3) {
  phraseToGuess = input3;
}

const guessMessage = "enter phrase number " + randomFrom1To3;
const userGuess = prompt(guessMessage); //program stops
const guessIsCorrect = phraseToGuess === userGuess;

if (guessIsCorrect) {
  const successMessage =
    "correct! phrase " + randomFrom1To3 + ' was "' + phraseToGuess + '"';
  alert(successMessage);
} else {
  const unsuccessMessage = "nope :(";
  alert(unsuccessMessage);
}
