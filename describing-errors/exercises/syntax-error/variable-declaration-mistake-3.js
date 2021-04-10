"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: 
  Chrome: Unexpected token '='
  Mozilla: missing variable name

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation

  the mistake: there is no variable name

  the fix(es): add variable name
*/

const studentMoto = "always be learning";
