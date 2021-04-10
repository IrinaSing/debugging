"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  callstack: 
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: during variable re-assignment the value of assignment stays before it's name.

  the fix(es): fix syntax by switching places of the variable's name and it's value.
*/

let favoriteNumber = 4;
favoriteNumber = 3; // error, mistake
