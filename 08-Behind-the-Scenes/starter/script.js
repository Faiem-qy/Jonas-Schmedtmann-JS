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
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating New variable with same name as outwe scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      const output = 'NEW OUTPUT!';
      const str = ` Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3)); if you remove strict mode you will get the andwer of 5
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// console.log(age); both of these cannot be called out of the scope
// printAge();only from within

*/

/*
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  // arrow function does not have a 'this' keyword
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();

*/

// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);

      console.log(self.year >= 1981 && self.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // greet: function () {// this yields Hey Jonas
  greet: () => {
    //arrow dunction yileds Hey Matilda
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();
// never use an arrow function as a method
