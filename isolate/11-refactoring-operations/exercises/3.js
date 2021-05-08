"use strict";

// cast to the same number
//  remember: Object.is returns true when it compares NaN and NaN
//  for this exercise, two values are the same number if they both become NaN

const a = "four";
const b = undefined;

const result = Object.is(Number(a), Number(b));
console.log(result);

{
  // 1. Cast strings to number
  const step1 = Number(a);
  const result = Object.is(step1, Number(b));
  console.log(result);
}

{
  // 2. Cast undefined to number
  const step1 = Number(a);
  const step2 = Number(b);
  const result = Object.is(step1, step2);
  console.log(result);
}

{
  // 3. check if the values are the same
  const step1 = Number(a);
  const step2 = Number(b);
  const step3 = Object.is(step1, step2);
  const result = step3;
  console.log(result);
}
