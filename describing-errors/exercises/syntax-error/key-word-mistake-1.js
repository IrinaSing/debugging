"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected identifier

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:1

  life cycle:

  the mistake: In JavaScript, identifiers are used to name
  variables (and keywords, and functions, and labels).
  THere is a for-loop, but instead of "for" used "if" statement.

  the fix(es): change "if" for "for"
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
