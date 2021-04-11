"use strict";

/*
  browser: Chrome

  name: TypeError
  message: 
  Chrome: Cannot read property 'length' of null
  Mozilla: userInput is null

  callstack: 
    at <anonymous>:22:23
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution

  the mistake: user input deliberately assigned to "null". Thus, lenght of null can not be measured. 
  Lenght only applied to strings.

  the fix(es): change userInput value for strings.
*/

const userInput = "how long";

console.log(userInput.length);
