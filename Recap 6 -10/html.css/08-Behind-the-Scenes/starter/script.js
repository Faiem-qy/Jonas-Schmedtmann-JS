'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    // firstName chooses Jonas here because it checks the scope chain and selects the global declaration

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven"; // JS will call this first because it is within the current scope. If we remobe this variable then it would choose from the global scope(or scope chain)
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // output = "NEW OUTPUT!"; // manipulate the original output
      // const output = 'New Output!'; // this would not affect the original out put as it is a new variable (with the same name as an outer scope)
    }
    // console.log(str); cannot be accessed because it is in a block scope
    console.log(millenial); //not block scoped(var)
    // add(2, 3); add wont be called because strict mode is enabled
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age); cannot be accessed because it is in a function scope.
// printAge() cannot be accessed because it is in a function scope
*/

/*
// 8.95 Hoistiing and TDZ practice
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const yeat = 1991;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

console.log(undefined);
if (!numProducts) deleteShoppingCart(); //this will retun all products deleted because of hoisting, num products is not 10 and is actually undefined even though it is declared as 10.

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

//best practices
// - use const most of the time unless you really need to change variables at a later time then use let
//- in order to write clean code it is better to declare variables first
//- always declare functions first and use them after the declaration

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);

*/
/*
// 8.96 The This keyword

const bob = {
  name: 'Bob',
  year: 1989,
  calcAge: function () {
    return 2037 - this.year; // this.year has the same effect of sayig Bob.year
  },
};
bob.calcAge();

// 8.97 this keyword practice
// -----------------------
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);
// ---------------------------
// arrow function uses the lexical this keyword, it uses the this version from the parent scope
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1980);
// --------------------------
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
// --------------------
const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
*/

/*
// 8.98 Regular function vs arrow functions
// arrow functions do not get the this keyword

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// jonas.greet();

// -----------

// having a function inside a method

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1

    // const self = this; // self is used to preserve the this keyword...self or that. pre es6 solution.
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    /*
    // Solution 2 the arrow function does not have a this keyword

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keyword - just like the this only available in regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

// 8.99 primitive vs reference types  (recap)
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// scenario with Object

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log(' Friend:', friend);
console.log('Me', me);
