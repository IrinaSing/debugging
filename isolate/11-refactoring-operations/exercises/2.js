"use strict";

// same truthiness

const a = undefined;
const b = 0;

const result = Boolean(a) !== Boolean(b);
console.log(result);

{
  // 1. Cast a to boolean
  const step1 = Boolean(a);
  const result = step1 !== Boolean(b);
  console.log(result);
}

{
  // 2. Cast b to boolean
  const step1 = Boolean(a);
  const step2 = Boolean(b);
  const result = step1 !== step2;
  console.log(result);
}

{
  // 3. Strict comparison
  const step1 = Boolean(a);
  const step2 = Boolean(b);
  const step3 = step1 !== step2;
  const result = step3;
  console.log(result);
}
