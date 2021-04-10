"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Illegal break statement

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: break statement is not appropriate for this if-statement. There is no loop to escape. Here break does not let console to display the result.

  the fix(es): remove break statement
*/

const userName = "wingdoz";

if (userName.length > 3) {
  console.log(userName);
  //break; //error
}
