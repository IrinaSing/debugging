"use strict";

/*
  browser: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  callstack: at <anonymous>:20:13
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution phase

  the mistake: the variable "tomatoes" was declared after reading.

  the fix(es): To put declaration and initialization of the variable before it is read.
*/

let tomatoes = "fresh";

console.log(tomatoes);
