"use strict";

/* Repeater

  write a function that repeats a string, with all the good practices

  - documentation
  - default parameters

*/

/**
 * this function repeats a string as many times as you want
  it has two parameters
  - stringParam (a string): the string you want to repeat
  - numberParam (a number): how many times to repeat it

  it returns a string: the initial string repeated

 * @param {string} text - text that will be repeated.
 * @param {number} repeats - number of repeats for the string.
 * @returns {string} text repeated assigned number of times. Minimum returns - 1.
 */
const repeat = (text = "", repeats = "1") => {
  let repeated = "";
  for (let i = 0; i < repeats; i++) {
    repeated = repeated + text;
  }
  return repeated;
};

const _1_expect = "aaaa";
const _1_actual = repeat("aaaa", 1);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = "";
const _2_actual = repeat("", 12);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = "";
const _3_actual = repeat("hoy!", 0);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = "abcabcabc";
const _4_actual = repeat("abc", 3);
console.assert(_4_actual === _4_expect, "Test 4");

// test default parameters
const _5_expect = "-+-";
const _5_actual = repeat("-+-");
console.assert(_5_actual === _5_expect, "Test 5: second default parameter");

const _6_expect = "";
const _6_actual = repeat();
console.assert(_6_actual === _6_expect, "Test 6: both default parameters");
