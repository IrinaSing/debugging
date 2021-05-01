"use strict";

const userString = prompt("Enter a number");
const userNumber = Number(userString);
const inputIsANumber = !Number.isNaN(userNumber);

const userThinksItsANumber = confirm("Do you think it's a number?");

const userIsCorrect = inputIsANumber === userThinksItsANumber;

if (userIsCorrect) {
  alert("Correct!");
} else {
  alert("Not correct");
}
