// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();
*/

/*
// Problem:
// We work for a company building a smart home thermometer. Out most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
//  - What is temp amplitude? Answer: difference between the highest and lowest temp
//  - How to compute the max and min temperatures?
//  - What's a sensor error? and what to do

//2) Breaking up the problem into sub-problems
// // how to ignore errors?
// Find max valur in temp Array
// find min value in temp Array
// Subtract min from max (amplitude) and then return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]); example
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2
// Function should now receive arrays of temps

// 1) Understand the problem
// - with 2 arrays should we implement functonality twice? No! Just merge two arrays

//2) Breaking up into sub-problems
//- Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

*/

// 6.0 Debugging
// Finding, fixing and preventing bugs

// 6.1 fixing a bug using the console
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: prompt('Degrees celcius:'),
    //C) FIX
    value: Number(prompt('Degrees celcius:')),
  };

  //   B) FIND
  //   console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// IDENTIFY
console.log(measureKelvin());
*/
