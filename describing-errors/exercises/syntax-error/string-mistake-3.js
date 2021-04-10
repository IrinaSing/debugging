"use strict";

/*
  browser: Chrome

  name: SyntaxError
  message: Unexpected string

  callstack: 
    at HTMLIFrameElement.evaller.onload (study-with.js:40)
    at Object.debugger (study-with.js:42)
    at JavaScriptFE.studyWith (javascript-class.js:303)
    at HTMLButtonElement.<anonymous> (javascript-class.js:149)

  life cycle: creation phase

  the mistake: insted of double quotation marks "" there were
  single quotation marks ''_'' used (doubled from each side)

  the fix(es): change ''_'' for "" for inner quotation.
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day'; //error, mistake
