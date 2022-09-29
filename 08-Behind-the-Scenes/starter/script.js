'use strict';

/*
const name = 'Jonas';

const first = () {
    let a = 1;
    const b = second();
a = a + b;
return a;
}
function secons () {
    var c = 2;
    return c;
}
*/
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = ` You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
