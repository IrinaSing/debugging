"use strict";

/*
  browser: the error shows itself in vscode, jsTututor. In browsers it is OK.

  name: ReferenceError
  message: welf is not defined

  callstack: I don't see it in browser

  life cycle: execution phase

  the mistake: there is no "let", "var" or "const" word before variable that should be declared.

  the fix(es): to add "let" to variable declaration
*/

let welf = "ingrad";

console.log(welf);
