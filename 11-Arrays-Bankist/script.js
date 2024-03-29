'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//151 continued

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      // const username = user
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    // return username;
  });
};

createUsernames(accounts);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcPrintBalance(account1.movements);
// console.log(accounts);
// console.log(createUsernames('Steven Thomas Williams'));

// const user = 'Steven Thomas Williams'; // stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     //map(name=>name[0]) return name not needed when using =>
//     return name[0];
//   }) // can be simplified using arrow function-
//   .join('');

// console.log(username);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; /*

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// 142 Simple Array Methods

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// the slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //this
console.log(arr.slice([...arr])); //or this

// SPLICE - similar but mutated the array
// console.log(arr.splice(2)); //
// console.log(arr); // missing parts of the array after using the splice method

arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr); // removed "e"

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

*/

/*
//143
// the new at mmethod
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last arry element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// the at method also works on strings;

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/
/*
//144  Looping arrays forEach Method
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
//  for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------forEach---------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Mov ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Mov ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(400)
// 2: function(450)
// ...
*/

/*
// 145 forEach with Maps and Sets

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {key
  // _ means a throwaway variable
  // console.log(`${key}:${value}`);
  console.log(`${value}:${value}`);
});

// 146 Project :'Bankist' App
// 147 Creating DOM ELements


*/
/* 148 challenge
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1,3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number${i + 1} is still a puppy`);
    }
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// 149 Data Transformations: map, filter, reduce
/*
// 150 The Map Method

// using the movements array

const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd); // same code using arrow function

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
  )}`;

  // if (mov > 0) { // if else statement for the line above 279
  //   return `Movement ${i +1}: You deposited ${mov}`;
  // }else {\
  //   return`Movement ${i + 1}: You witdrew ${Math.abs(mov)}`;
  // }
});
*/

// 151 Computing Usernames

/*
// 152 The Filter Method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// const withdrawals = movements.filter(function (movv) {
//   return movv < 0; // same as arrow function below
// });

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);

*/
/*
// The reduce Method

console.log(movements);

//accumulator is like a snowball
// const balance = movements.reduce(function (accumulator, current, i, arr) {
//   console.log(`Iteration ${i}: ${accumulator}`);
//   // console.log(i);
//   // console.log(current);
//   return accumulator + current;
// }, 0);

// Using arrow function
const balance = movements.reduce(
  (accumulator, current) => accumulator + current,
  0
);

console.log(balance);

//same result as .reduce using a for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

// 1.
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// change string into array(split())
// reverse array(.reverse)
// change from array to string (join())
function solution(str) {
  let string = str.split("").reverse().join("");
  return string;
}

console.log(solution("world"));
console.log(solution("word"));

// variant
// const solution = str => str.split('').reverse().join('');

// 2nd variant
// const solution = s => [...s].reverse().join('')
// 2.


// double the integer and return it.
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}
-----
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
let sum = 0;
  for(let i = 0; i < numbers.length;i++){
    sum += Math.pow(numbers[i],2)
  }
  return sum
}
