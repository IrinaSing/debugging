"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected end of input

  callstack: at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: closing brace is missing

  the fix(es): add closing brace
*/

for (let i = 0; i < 5; i++) {
  console.log(i); //error, mistake
}
