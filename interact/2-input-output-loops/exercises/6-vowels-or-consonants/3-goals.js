"use strict";

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = "";
while (true) {
  userInput = prompt("enter a word to filter:");

  /* -- BEGIN: validate input -- */
  // this piece of code represents loop before input is correct and confirmed.

  if (userInput === "" || userInput === null) {
    alert("That's nothing");
    continue;
  }

  const whiteSpaceRegex = new RegExp("\\s", "g");
  if (whiteSpaceRegex.test(userInput) === true) {
    alert("words can't have white space");
    continue;
  } else {
    let userDidConfirm = false;
    userDidConfirm = confirm(`Do you want to use "${userInput}"?`);
    if (userDidConfirm === true) {
      break;
    }
  }
  /* -- END: validate input -- */
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = "";
if (removeVowels) {
  toRemove = "AEIOU";
} else {
  toRemove = "BCDFGHJKLMNPQRSTVWXYZ";
}

let filteredInput = "";
/* -- BEGIN: filter input -- */
for (let character of userInput) {
  const upperCaseChar = character.toUpperCase();
  if (!toRemove.includes(upperCaseChar)) {
    filteredInput += character;
  }
}

/* -- END: filter input -- */

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
