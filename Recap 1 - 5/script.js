'use strict';

// 1.9
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
//1.10
// a value is a piece of data for example
// a values is the smallest unit of information in JS
// it is very useful to store values in to variables
// using 'let' we declare the variables that can be reused
console.log('Jonas');
console.log(23);

let firstName = 'Jim';
console.log(firstName);

// _ and $ can be used when declaring a value

// eg
let $function = 27;
// use the let variable if the value is not going to change

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

//1.12
// Data Types - every value is either an object or primitive value
//object = let me = {name:'Jonas'}

//primitive = let firstName = 'Jonas';
//let age = 30;
// a value is only a primitive when it is not an object

// 7 different primitive types
// 1. Number - used for decimals and integers
// 2. Strings - used for text
// 3. Boolean - logical typae that can only be true or false
// 4. Undefined - Value taken by a variable that is not yet defined
// 5. Null - Also means empty value
// 6. symbol (ES2015- Value that is unique and cannot be changed
// 7. Biglnt - (ES2020) larger integers than the number type can hold

// javaScript has a dynamic typing. when you create a variable JS automatically determines the data type

*/

/*
let javaScriptIsFun = true;
console.log(true);

// type of is an operator that can identify the type of value
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// dynamic typing
javaScriptIsFun = 'Yes!'; // when changing the value of a variable declare without using the let
console.log(typeof javaScriptIsFun);

// an example of undefined
// the value taken of a variable that is not yet defined ( an empty value)
let year; //eg
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //bug in js it id desplayed as an object in the cl. it should return as null
*/

/*
// 1.13

let age = 30;
age = 31; // reassigning a value toa variable, mutating the age variable

const birthYear = 1991; // value cannot be changed at a later time when using const
// birthYear = 1990;

// const job;// cannot declare this as well

// var is a legacy way of defining variables
var job = 'programmer';
job = 'teacher';

*/
/*
// 1.14 Basic Operators

// allows to combine values

//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** means 2 to the power of 3 = 2*2*2
const firstName = 'Jonas';
const LastName = 'Schmedtmann';
console.log(firstName, LastName);

console.log(firstName + ' ' + LastName);

// assignment operator
let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x--; //minus 1
x++; // add 1

console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // is ageJonas greater than ageSarah// >, <, >=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// 1.15 Operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); //left to right order

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
//1.16 coding exercise

//Test Data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Test Data 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// Test Data 3
// const markMass = 200;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}. The results indicate that Mark's BMI is higher`
  );
} else {
  console.log(
    `John's BMI is ${johnBMI} and Mark's BMI is ${markBMI}. The results indicate that John's BMI is higher`
  );
}
*/
/*
// 1.17 Strings and template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; // string
console.log(jonas);

const js = 'JavaScript ' + ' is ' + ' very ' + ' awesome' + '!!';
console.log(js);

const string = 'Making ' + ' strings ' + ' are ' + ' pretty ' + ' Cool';
console.log(string);

const int =
  'Interesting' +
  ' that ' +
  ' spaces ' +
  ' must ' +
  ' be ' +
  ' used ' +
  ' throughout ' +
  ' the ' +
  ' string ' +
  'in' +
  ' order ' +
  ' to ' +
  'maintain' +
  ' the ' +
  ' gaps ';
console.log(int);

const sim = ` This is literally so much easier to get the information across. Hey ${firstName} !! `;
console.log(sim);

// template literals allow us to write strings in a normal way using back ticks
const jonasNew = `I 'm ${firstName}, a ${year - birthYear} year old ${job}! `;
console.log(jonasNew);

// we can use back ticks for any regular String
console.log(`Just a regular string...`);

//multi line strings( before ES6)
console.log('String with \n\
 multiple \n\
 lines');
//\n\ means new line

console.log(`String
 multiple
 lines`);
*/
/*
//  1.18 Taking decisions if/else statements

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  // console.log(' Sarah is not old enough to start driving');
  const yearsLeft = 18 - age;
  console.log(` Sarah is too young, wait another ${yearsLeft} years`);
}

// if() {

// } else {

// } // called a control structure

// const birthYear = 1991;
// if (birthYear < +2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }
// console.log(century); if century is logged it will not be called as it is not defined and hence a code block. you must define it outside for it to work eg.

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
  // <= (operator) is used to create a condition
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
const birthYear = 2001;
const ageofpilot = 2019 - birthYear;
console.log(ageofpilot);

if (ageofpilot >= 21) {
  console.log(
    ` The pilot has reached the age of ${ageofpilot} which allows for practal training with a instructor`
  );
} else {
  console.log(
    ` This person cannot take practice lessons because they have not reached the permissible age `
  );
}
*/

/*
// 1.19 coding challenge

//Test Data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Test Data 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// Test Data 3
// const markMass = 200;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI >= johnBMI) {
  console.log(
    `Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}. We can conclude that Mark's BMI is higher than John's`
  );
} else {
  console.log(
    `John's BMI is ${johnBMI} and Mark' BMI is ${markBMI}. We can conclude that John's BMI is higher than Mark's`
  );
}
*/

// 20. Type Conversion and Type Coercion

//Type Conversion

const inputYear = '1991';
// console.log(inputYear + 18); // the numeber will not add to the string. it will be displayed as 199118
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); this will trigger a NaN message meaning Not a Number
console.log(typeof NaN);
// Both Number and String need to start with an uppercase letter to work

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old'); // the plus operator converts strings into numbers
console.log('I am ' + '23' + ' years old'); // the results are the same
console.log('I am ' + String(23) + ' years old'); // if the language does not have the automatic coercion then it would have to be done manually

// not all operators so type coercion to strings eg
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n); // the result of this would 10 because it executed 1+1 = 11 - 1 = 10
