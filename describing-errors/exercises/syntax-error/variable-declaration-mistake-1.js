"use strict";

/*
  browser:

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  callstack:   
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: variable "tree" was declared twice.

  the fix(es): delete "let" from line 24. Thus, variable "tree"
  will be declared pnce and assigned twice which is ok.
*/

let tree = "oak";

let tree = "birch"; // error, mistake
