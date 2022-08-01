
/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"
console.log(firstName);
console.log(firstName);
console.log(firstName);


let jonas_matilda = "JM"
let $function = 27;

let person = 'jonas';
let PI = 3.1415;



let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun)



let year;
console.log(year);
console.log(typeof year);


year = 1991;
console.log(typeof year)

console.log(typeof null);

*/


/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthyear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schemtmann';
console.log(lastName);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah,);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x *4 = 100
x++;// x = x + 1
x--;//
x--;//
console.log(x);


console.log(ageJonas > ageSarah);// >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/


/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25 - 10 - 5;// x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/



// 1.16

/*
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI)

// console.log(markBMI)
// console.log(johnBMI)
// console.log(markHigherBMI)
// or console.log(markBMI, johnBMI, markHigherBMI);

let data1 =
    "Mark's weights " +
    markMass +
    ' kg and is ' +
    markHeight +
    " m tall. John's weights " +
    johnMass +
    ' kg and is ' +
    johnHeight +
    ' m tall'
console.log(data1);


/*
const massJim = 55;
const heightJim = 1.25;
const massJohn = 104;
const heightJohn = 1.88;

let BMIJim = massJim / heightJim ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
const jimHigherBMI = BMIJim > BMIJohn;

console.log(BMIJim);
console.log(BMIJohn);
console.log(jimHigherBMI);
// console.log(BMIJIm, BMIJohn, markHigherBMI);// or this



// Data 1: Jim weighs 55 kg and is 1.25 m tall.John weighs 104 kg and is 1.88m tall.
// § Data 2: Jim weighs 95 kg and is 1.88 m tall.John weighs 85 kg and is 1.76m tall.


const data1 = `Jim's weighs ${massJim}kg and is ${heightJim}m tall. John weighs ${massJohn}kg and is ${heightJohn}  tall`;

console.log(data1)
*/

// 1.17
/*
const firstName = 'Jonas';
const job = 'teacher'
const birthYear = 1991;
const year = 2037;


const jonas = "i'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + (job) + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}! `;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with\n\
multiple\n\
lines`);

console.log(`String
multiple
lines`);
*/

/*
// 1.18 Taking decisions is/else Statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {// else block is optional
    const yearsLeft = 18 - age;
    console.log(` Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012; //variable of century. define century outside if / else block

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// 1.19 coding challenge #2
/*
1. Print a nice output to the console, saying who has the higher BMI.The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
BMI(28.3) is higher than John's (23.9)!"


const whoHasHigherBMI = `John's ${johnBMI} is higher than Mark's!`;

console.log(whoHasHigherBMI);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's (${johnBMI}) BMI is higher than Mark's!(${markBMI})`)
}
*/

/*
// 1.20 Type Conversion and Coercion

//  tyep conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('I am ' + '23' + ' years old')
console.log('I am ' + String(23) + ' years old')
console.log('23' - '10' - 3);
console.log('23' / '2');


let n = '1' + 1; // '11'
n = n - 1;//
console.log(n);

*/
/*
// 1.21 Truthy and falsy values
// 5 falsy values; 0, '', underined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Dont't spend it all;");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}

*/

/*
// 1.22 Equality operators

const age = '18';
if (age === 18) console.log('You just became an adult :D(strict)');

if (age == 18) console.log('You just became an adult :D(loose)');


// operator for equality

const favourite = Number(prompt(" What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//22 === 23 -> flase
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
}
else {
    console.log('Number is not 23 or 7 or 9')
}

// operator for different

if (favourite !== 23)
console.log('Why not 23?');

*/

// 1.23 basic boolean logic: the and, or & not operators
// truth tables


/*
// 1.24 Logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; //B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);// And
console.log(hasDriversLicense || hasGoodVision);// or
console.log(!hasDriversLicense);// ! means not


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }


console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

//1.25 
