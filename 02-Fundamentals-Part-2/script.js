'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

// // 3.3 Functions
// function logger() {
//     console.log('My name is Jonas');
// }

// // calling/running/invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);// these parameters are called the arguement
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice);

// const num = Number('23');


// 3.4
// Function Declarations vs Expressions

// function declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);


// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// 3.5 Arrow Function

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// 3.6 Functions calling other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// 3.7 Reviewing Functions

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));



// function dolphinsScore1(score1, score2, score3) {
//     console.log(score1, score2, score3);
//     const score = `The dolphins average score is ${(score1 + score2 + score3) / 3} `;
//     return score;
// };

// const firstScore = dolphinsScore1(44, 23, 71);
// console.log(firstScore);
// // console.log(dolphinsScore1(44, 23, 71));


// const secondScore = dolphinsScore1(85, 54, 41);
// console.log(secondScore);


// const calcAverage = (a, b, c) => ((a + b + c) / 3);
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);
// console.log(scoreDolphins2, scoreKoalas2);


// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win the trophy⚡(${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win the trophy⚡(${avgKoalas} vs {avgDolphins})`);
//     } else {
//         console.log(' No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(5200, 1001);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

/*
// 3.9 Arrays

const friend1 = 'Michael';
const friend2 = ' Steven';
const friend3 = ' Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends)


const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);// counting elements in the array
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';//changing an element #2 even though it is declared by const
console.log(friends);
// friends = ['Bob, 'Alice];// this would be illegal

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearss = [1990, 1967, 2002, 2010, 2018];

// calcAge(yearss);// cannot work because because it is trying to subtract all the years from 2037
// // cannot do operations with arrays

const age1 = calcAge(yearss[0]);
const age2 = calcAge(yearss[1]);
const age3 = calcAge(yearss[yearss.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(yearss[0]), calcAge(yearss[0]), calcAge(yearss[years.length - 1])];
console.log(ages);
*/

/*
// 4.0 Basic array operations
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop();// last
friends.pop();// remove another
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// add elements
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));// because Bob is not in the list then it returns a value of -1

friends.push(23);
console.log(friends.includes('Steven'));//ES6 method to check if the elsement is included
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

// use the includes method to add conditionals

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/

/*
// 4.1
const calcTip = function (bill) {//function expression
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill>=50 && bill <= 300 ? bill * 0.15 : bill * 0.2; //arrow function

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// 4.2 introduction to objects
// const jonasArray = [// array
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];// in arrays we cannot give the elements a name only by order number

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };// by using objects we can give each element a name

// console.log(jonas);

// 4.3 Dot an Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};// by using objects we can give each element a name

console.log(jonas);

console.log(jonas.lastName); //dot notation
console.log(jonas['lastName']);// bracket notation

const nameKey = 'Name'
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// console.log(jonas.'last' + namekey)//cannot work with the dot notation

const interestedIn = prompt('WHat do you want to know about Jonas? CHoose between firstName, lastnNme, age, job and friends.');
console.log(jonas.interestedIn)//is undefined because there is no property called interestedIn.
console.log(jonas[interestedIn]);//using brackets yields results in this case

