let sentence = "";

let isValid = false;
console.log("~~~ Gather user input ~~~");
while (!isValid) {
  sentence = prompt("enter a sentence with at least 2 words");

  if (sentence === null) {
    console.log("path: user cancelled");
    alert("there is no escape");
  } else if (sentence.length < 3) {
    console.log("path: input was too short");
    alert('"' + sentence + '" is too short to have two words');
  } else if (!sentence.includes(" ")) {
    console.log("path: user did not enter space");
    alert("there is no space");
  } else {
    console.log("path: input fits criteria:", sentence);
    isValid = true;
  }
}

sentence = sentence + " ";

let newSentence = "";

let nextWord = "";
console.log("~~~ Getting confirmation form user ~~~");
for (let character of sentence) {
  if (character === " ") {
    let keep = confirm("do you want to keep this word:\n\n- " + nextWord);
    if (keep) {
      newSentence = newSentence + character + nextWord;
      console.log('Keep:', nextWord)
    }
    nextWord = "";
  } else {
    nextWord = nextWord + character;
  }
}
console.log(`~~~ Words kept ~~~\n${newSentence}`)
alert(newSentence);

