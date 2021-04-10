"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected token '}'

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: one closing brace is excessive

  the fix(es): to delete the closing brace that is placed right after opening brace
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
