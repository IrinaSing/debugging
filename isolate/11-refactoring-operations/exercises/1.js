"use strict";

// same type

const a = 4;
const b = "4";

const result = typeof a === typeof b;
console.log(result);

{
  // 1. determine the type of a
  const step1 = typeof a;
  const result = step1 === typeof b;
  console.log(result);
}

{
  // 2. determine the type of b
  const step1 = typeof a;
  const step2 = typeof b;
  const result = step1 === step2;
  console.log(result);
}

{
  // 3. strict comparison
  const step1 = typeof a;
  const step2 = typeof b;
  const step3 = step1 === step2;
  const result = step3;
  console.log(result);
}
