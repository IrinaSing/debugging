"use strict";

/*
  browser: chrome, firefox

  name: SyntaxError

  message: 
  Chrome: Missing initializer in const declaration
  Mozilla: missing = in const declaration

  callstack:    
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation

  the mistake: variable "const path;" was not initialized

  the fix(es): initialized by adding "=" and empty strings.

name: TypeError

  message: Assignment to constant variable.

  callstack:    
    at <anonymous>:25:8
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: execution

  the mistake: variable "path;" was assigned as const, but in the program it
  supposed to change value depending on the path.

  the fix(es): change path from const to let.
*/

const userName = "qopiznu";

let path; // error, mistake. variable was not initialized

if (userName.length > 4) {
  path = "if";
} else {
  path = "else";
}

console.log(path);
