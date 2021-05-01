"use strict";

const userString = prompt("enter a number:");

/* -- BEGIN: check if input is a number -- */
const userNumber = Number(userString);

const inputIsANumber = !Number.isNaN(userNumber);
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const userThinksItsANumber = confirm("Do you think it was a number?");

/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert("correct!");
} else {
  alert("nope :(");
}
