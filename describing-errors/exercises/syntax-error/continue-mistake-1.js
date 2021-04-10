"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: SyntaxError: Illegal continue statement: no surrounding iteration statement

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: it is not a loop to use continue statement (we use const, and it is not a user input).

  the fix(es): continue should be deleted.
*/

const userName = "wingdoz";

if (userName.length > 3) {
  console.log(userName);
}
