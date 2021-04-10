"use strict";

/*
  browser: Chrome

  name: SyntaxError
    
  message: Unexpected token '{'

  callstack:
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: "if - else - else". there are 3 execution paths. It means there should be used
  multiples statements "if - else if - else". 

  the fix(es): add "if" to first "else-statement"
*/

const userName = "indrogo";

if (userName.length < 3) {
  console.log("too short");
} else if (userName.length < 5) {
  //error, mistake
  console.log("just right");
} else {
  console.log("too long");
}
