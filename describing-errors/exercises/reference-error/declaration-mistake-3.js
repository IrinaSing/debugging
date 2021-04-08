"use strict";

/*
  browser: Chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack:
  at <anonymous>:24:19
    at <anonymous>:24:19
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution phase

  the mistake: variable isValidUserName declared after it is read.

  the fix(es): to place declaration of variable before it is read.
*/

const userName = "chiobin";
console.log("userName:", typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log("isValidUserName:", typeof isValidUserName, isValidUserName);
