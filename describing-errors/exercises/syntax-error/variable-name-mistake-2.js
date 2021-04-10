"use strict";

/*
  browser: Chrome, Mozilla

  name: SyntaxError
  message: 
  Chrome: Identifier 'undefined' has already been declared
  Mozilla: redeclaration of non-configurable global property undefined

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation

  the mistake: name of the variable is equal to js reserved word "undefined" for global property.

  the fix(es): change name for variable
*/

const number3 = "three"; //error, mistake
