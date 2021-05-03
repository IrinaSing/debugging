"use strict";

/*
  only keep words that are the right length
*/

alert(
  `enter as many words as you want

then enter a length
-> only words of the right length will remain`
);

// -- gather words --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const words = [];

while (true) {
  /* == BEGIN: gather words until the user cancels == */
  const input = prompt("Enter words to filter");

  if (input === null) {
    break;
  } else if (input === "") {
    alert("Nothing");
  } else {
    const withWhiteSpaces = new RegExp("\\s", "g").test(input);
    if (withWhiteSpaces) {
      alert("words can not contain white spaces");
    } else {
      words.push(input);
    }
  }
  /* == END == */
}

// -- get the length to filter --
let lengthToKeep = NaN;

while (true) {
  /* == BEGIN: a number from the user == */
  const input = prompt("Enter lenghts to filter");

  lengthToKeep = Number(input);
  if (lengthToKeep === "" || lengthToKeep === null) {
    alert("Enter something");
    continue;
  } else if (Number.isNaN(lengthToKeep)) {
    alert(lengthToKeep + " is not a number");
  } else {
    break;
  }
  /* == END == */
}

// -- keep only words with the right length --
const keepThese = [];
/* == BEGIN: filter out words that are not the correct length == */
for (const word of words) {
  if (word.length === lengthToKeep) {
    keepThese.push(word);
  }
}

/* == END == */

// -- generate a message for the user --
let message = `length: ${lengthToKeep}\nwords: `;
for (const word of keepThese) {
  message += `${word}, `;
}

// -- alert the final message --
alert(message);

// -- log for developers --
console.log(words, lengthToKeep, keepThese);
