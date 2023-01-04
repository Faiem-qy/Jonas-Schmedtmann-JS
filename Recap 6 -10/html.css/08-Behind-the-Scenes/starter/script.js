"use strict";

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
