"use strict";

/*
  browser: Chrome

  name: SyntaxError 
  message: Illegal return statement

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: there should be break not return statement.

  the fix(es): change return for brake (to stop iterations when their value > 8). It is the only way to 
  get out of infinite loop while(true).
*/

let iterations = 0;

while (true) {
  iterations += 1;

  if (iterations > 8) {
    brake; //error, mistake
  }
  console.log(iterations);
}

//console.log(iterations); //mistake - move inside braces line 26
