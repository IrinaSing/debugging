"use strict";

const words = [];
let isDone = false;

while (!isDone) {
  const input = prompt("Enter word or press cancel");

  if (input === null) {
    isDone = true;
  } else if (input === "") {
    alert("Enter smth");
  } else {
    const withWhiteSpaces = new RegExp("\\s", "g").test(input);
    if (withWhiteSpaces) {
      alert("words can not have white spaces");
    } else {
      words.push(input);
    }
  }
}

let lenghToKeep = NaN;
let isNumber = false;
while (!isNumber) {
  const input = prompt("Enter lenghts");

  lenghToKeep = Number(input);
  if (input === "" || input === null) {
    alert("Nothing");
  } else if (Number.isNaN(lenghToKeep)) {
    alert("It is not a number");
  } else {
    isNumber = true;
  }
}

const toKeep = [];
for (const word of words) {
  if (word.length === lenghToKeep) {
    toKeep.push(word);
  }
}

let message = `lenght: ${lenghToKeep}\nwords: `;
for (const word of toKeep) {
  message += `- ${word}, `;
}

alert(message);
