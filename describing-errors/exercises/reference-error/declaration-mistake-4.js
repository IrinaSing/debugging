"use strict";

/*
  browser: JS Tutor Live

  name: ReferenceError
  message: seven is not defined

  callstack: i do not find it

  life cycle: execution phase

  the mistake: there is  no declarative word before the variable name "seven"

  the fix(es): to add "let" before variable name
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

let seven = add(3, 4); // error, mistake
