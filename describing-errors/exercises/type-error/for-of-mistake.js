"use strict";

/*
  browser: Chrome

  name: TypeError
  message: max is not iterable

  callstack:
    at <anonymous>:22:20
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution

  the mistake: there are no conditions for iteration of variable max

  the fix(es): we can create an arrow as a condition for iteration: [12, 20, 30]
*/

const max = [12, 20, 30]; // error, mistake

for (const step of max) {
  console.log(step);
}
