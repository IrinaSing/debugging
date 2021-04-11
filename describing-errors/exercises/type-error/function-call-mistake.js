"use strict";

/*
  browser: 

  name: TypeError
  message: addedTowNumbers is not a function

  callstack:
    at <anonymous>:25:15
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution

  the mistake: 

  the fix(es):
*/

const addedTowNumbers = 7;

const addTowNumbers = (x = 0, y = 0) => {
  return x + y;
};
const seven = addedTowNumbers(3, 4);

console.assert(seven === addedTowNumbers);
