"use strict";
// even more math

const a = 1;
const b = 2;
const c = 3;
const d = 4;

const result = (b + (c - a * c)) / b;
console.log(result);

{
  // 1. parenthesis multiplication
  const step1 = a * c;
  const result = (b + (c - step1)) / b;
  console.log(result);
}

{
  // 2. parenthesis extraction
  const step1 = a * c;
  const step2 = c - step1;
  const result = (b + step2) / b;
  console.log(result);
}

{
  // 3. parenthesis, concatenation
  const step1 = a * c;
  const step2 = c - step1;
  const step3 = b + step2;
  const result = step3 / b;
  console.log(result);
}

{
  // 3. division
  const step1 = a * c;
  const step2 = c - step1;
  const step3 = b + step2;
  const step4 = step3 / b;
  const result = step4;
  console.log(result);
}
