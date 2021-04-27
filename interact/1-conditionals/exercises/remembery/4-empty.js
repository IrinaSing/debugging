"use strict";

alert("Those are rules:");

let input1 = "";
while (input1 === "" || input1 === null) {
  input1 = prompt("Enter 1 phrase");
}

let input2 = "";
while (input2 === "" || input2 === null) {
  input2 = prompt("Enter 2 phrase");
}

let input3 = "";
while (input3 === "" || input3 === null) {
  input3 = prompt("Enter 3 phrase");
}

alert("All phrases are saved in memory!");

const randNum = Math.random();
const outOf3 = randNum * 3;
const requestedPhrase = Math.ceil(outOf3);

let phraseToGuess = "";
if (requestedPhrase === 1) {
  phraseToGuess = input1;
} else if (requestedPhrase === 2) {
  phraseToGuess = input2;
} else if (requestedPhrase === 3) {
  phraseToGuess = input3;
} else {
  console.log("unreachable!");
}

let userGuess = "";
while (userGuess === "" || userGuess === null) {
  userGuess = prompt("What is the phrase " + requestedPhrase);
}

const guessIsRight = userGuess === phraseToGuess;

if (guessIsRight) {
  alert("It is indeed " + phraseToGuess);
} else {
  alert("Nope");
}
