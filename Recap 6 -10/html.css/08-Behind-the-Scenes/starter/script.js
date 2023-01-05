"use strict";
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
// 8.96 The This keyword
