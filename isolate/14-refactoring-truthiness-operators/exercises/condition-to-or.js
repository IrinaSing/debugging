"use strict";

// refactor this code to use || instead of a conditional

const isAfterFive = false;
const isTheWeekend = true;
console.log(isAfterFive, isTheWeekend);

/*let stopWorking = isAfterFive === true;
if (!stopWorking) {
  stopWorking = isTheWeekend === true;
}
*/

const stopWorking = isAfterFive === true || isTheWeekend === true;
console.log(stopWorking);
