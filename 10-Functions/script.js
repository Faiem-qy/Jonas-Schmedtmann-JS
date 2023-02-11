'use strict';

/*
// 10.128
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1;ES5 way
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // use undefined to leave as default
*/

/*
// 10.129 How passing arguments work: value vs reference

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport !");
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
// 10.130 First class or higher order functions

/*
// 10.131 Functions accepting call back functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👍');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
//132. Functions returning functions
const greet = function (greeting) {
  return function (name) {
    // works because of something called a closure
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

*/

/*
// 133. The call and apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // booking:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

// call method
book.call(eurowings, 23, "Sarah Williams"); // manually and explicitly set the this keyword of the function to call

console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper"); //manipulating the this keyword using the call method
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

//  Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// 134 The bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23); // partial application
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// Objects used together with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane ();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

// this keyword not present so we can use null
const addVAT = addTax.bind(null, 0.13);

console.log(addVAT(100));
console.log(addVAT(23));
*/

//134 the bind method
// challenge

/*
// 135 Immediately Invoked Function Expression
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// 136
// IIFE
(function () {
  console.log('This will never runa again');
  const isPrivate = 23;
})();

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
*/
// 137 closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

//Closure notes
// closure makes a function remember all the variables that existed
// A closure is the closed- over variable environment of the execution context in which a function was created, even after that execution context is gone.
// A closure gives a funcrion access to all the variables of its parent function, even after parent function has returned. The function keepa a reference to its outer scope, which preserves the scope chain throughout time.

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

//  A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
// We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed - over variab;es explicitly. A closure is NOT a tangible JavaScript object.

console.dir(booker);
booker();
