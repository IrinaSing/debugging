"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected token 'for'

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation ph

  the mistake: Const declares variable that does not change value in the program. 
  This is the for-loop to iterate a specific number of times.
  To start the loop we should use "for" without "const". 
  Also, as far as it is not a variable declartion, "=" should not be here.


  the fix(es): remove "const", remove "=" after "for".
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
