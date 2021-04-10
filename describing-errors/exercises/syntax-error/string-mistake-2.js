'use strict';

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected identifier

  callstack: 
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake:

  the fix(es):
*/

const anchorName = '#Home';

const innerHtml = "<p>Click here to <a href="anchorName">go home</a></p>"; //error, mistake
