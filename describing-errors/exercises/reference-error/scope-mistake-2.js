"use strict";

/*
  browser: Chrome

  name: ReferenceError
  message: isValidUserName is not defined

  callstack: 
    at <anonymous>:29:57
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution phase

  the mistake: the variable isValidUserName was declared inside of scope, so
  it can not be read outside the scope, by console.

  the fix(es): to insert console.log call inside the scope, so that variable could be read.
*/

const userName = "chiobin";
console.log("userName:", typeof userName, userName);

if (userName.length > 4) {
  const isValidUserName = true;
  console.log("isValidUserName:", typeof isValidUserName, isValidUserName);
} else {
  const isValidUserName = false;
  console.log("isValidUserName:", typeof isValidUserName, isValidUserName);
}

//console.log("isValidUserName:", typeof isValidUserName, isValidUserName); //error
