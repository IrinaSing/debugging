"use strict";

/*
  browser: Chrome

  name: SyntaxError

  message: Invalid or unexpected token

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:1

  life cycle: creation phase

  the mistake: Line 23. Multiline strings are not recognized.

  the fix(es): strings delimited by backticks, instead of the normal single/double quote delimiter.
  (solved in ES6 in 2015)
*/

const a = `this is
two lines`;
