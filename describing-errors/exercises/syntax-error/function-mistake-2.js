"use strict";

/*
  browser: Chrome

  name: SyntaxError:
  message: Malformed arrow function parameter list

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: parameter list of the Function is not surrounded with parenthesis.

  the fix(es): Bring function to format Function().
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);
console.log(seven);
