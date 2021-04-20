"use strict";

// some more math

const a = 1;
const b = 2;
const c = 3;

const result = (-a / b) * +c;
console.log(result);

{
  // 1. unary minus (make the number negative)
  const step1 = -a;
  const result = (step1 / b) * +c;
  console.log(result);
}

{
  // 2. parenthesis, division
  const step1 = -a;
  const step2 = step1 / b;
  const result = step2 * +c;
  console.log(result);
}

{
  // 3. unary plus (make the number positive)
  const step1 = -a;
  const step2 = step1 / b;
  const step3 = +c;
  const result = step2 * step3;
  console.log(result);
}

{
  // 4. multiplication
  const step1 = -a;
  const step2 = step1 / b;
  const step3 = +c;
  const step4 = step2 * step3;
  const result = step4;
  console.log(result);
}
