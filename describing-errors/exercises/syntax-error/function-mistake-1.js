"use strict";

/*
  browser:

  name: SyntaxError
  message: Unexpected token '{'

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: "=>" fat arrow expected in a function, because this is an Arrow function.

  the fix(es): add "=>" fat arrow
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);
console.log(seven);
