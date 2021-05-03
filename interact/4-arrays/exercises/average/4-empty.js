"use strict";

const numbers = [];

let isNumber = false;

while (!isNumber) {
  const userInput = prompt("Enter number");
  const nextNumber = Number(userInput);
  if (userInput === "done") {
    break;
  } else if (userInput === null || userInput === "") {
    alert("Nothing is impossible :)");
    continue;
  } else if (Number.isNaN(nextNumber)) {
    alert("It is not a number");
    continue;
  } else {
    numbers.push(nextNumber);
  }
}

let sum = 0;

for (const number of numbers) {
  sum = sum + number;
}

const average = sum / numbers.length;

const finalMessage = `numbers: ${numbers}, sum: ${sum}`;
alert(finalMessage);
