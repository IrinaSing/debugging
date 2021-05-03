"use strict";

const strings = [];
let isDone = false;

while (!isDone) {
  const input = prompt("Enter words to filter");

  if (input === null) {
    isDone = true;
  } else if (input === "") {
    alert("Nothing is impossible");
  } else {
    strings.push(input);
  }
}

const saved = [];
for (const text of strings) {
  const keepThose = confirm(`Do you want to keep: "${text}"`);
  if (keepThose) {
    saved.push(text);
  }
}

let message = "";
for (const text of saved) {
  message += `- "${text}"\n`;
}

alert(message);
