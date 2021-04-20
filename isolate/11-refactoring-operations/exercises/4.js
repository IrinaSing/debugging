"use strict";

// some math

const a = 1;
const b = 2;
const c = 3;

const result = -(a + b) * c;
console.log(result);

{
  // 1. parenthesis, concatenation
  const step1 = a + b;
  const result = -step1 * c;
  console.log(result);
}

{
  // 2. unary minus (make the number negative)
  const step1 = a + b;
  const step2 = -step1;
  const result = step2 * c;
  console.log(result);
}

{
  // 2. multiplication
  const step1 = a + b;
  const step2 = -step1;
  const step3 = step2 * c;
  const result = step3;
  console.log(result);
}
