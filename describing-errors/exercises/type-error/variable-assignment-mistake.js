"use strict";

/*
  browser: Chrome 

  name: SyntaxError
  message: 
  Chrome: Invalid left-hand side in assignment
  Mozilla: invalid assignment left-hand side

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation ph

  the mistake: when we assign variable, according to js syntax, we firstly put
  a variable name(on the left), then it's value(on the right).

  the fix(es): switch name of the variable places with it's value.
*/

let isHappy = false;

isHappy = true;
