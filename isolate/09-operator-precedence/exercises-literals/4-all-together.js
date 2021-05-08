"use strict";

// write lots of comments!  explain your thinking at each step

const expected = false;

// the original expression
const step0 = 12 % "3" || !!NaN;
console.assert(step0 === expected, "Step 0");

// how may steps are there?
/*
5 steps:
1. line  8:14 - operation (%): 12 % 3
(evaluates to): 0

2.  2. line  8:27 - (operation): ! NaN
operation (!): true

3. line  8:26 - (operation): ! true
operation (!): false

4. line  9:15 - operation (===): false === false

5. line  9:0  -  console.assert( true , Step 0 )
*/
