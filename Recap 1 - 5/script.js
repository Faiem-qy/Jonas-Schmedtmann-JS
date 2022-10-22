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

// 1.13

let age = 30;
age = 31; // reassigning a value toa variable, mutating the age variable

const birthYear = 1991; // value cannot be changed at a later time when using const
// birthYear = 1990;

// const job;// cannot declare this as well

// var is a legacy way of defining variables
var job = 'programmer';
job = 'teacher';

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
