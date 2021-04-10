"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Undefined label 'x'

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: there is no label declared although it is used with break. 

  the fix(es): There should be not break but return. Then console will return
  the result of concatenation to the user.
*/

const add = (x = 0, y = 0) => {
  return x + y; // error, mistake
};

const seven = add(3, 4);

console.log(seven);
