"use strict";

/*
  browser: Chrome, Mozilla

  name: SyntaxError
  message: 
  Mozilla: missing variable name
  Chrome: Unexpected number

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation

  the mistake: name of variable can not start with number. 

  the fix(es): change "3" for "number3"
*/

const number3 = "three"; // error, mistake
