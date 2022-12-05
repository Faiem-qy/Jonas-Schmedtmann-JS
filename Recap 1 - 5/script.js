// 'use strict';

// // 1.9
// /*-----------------------------------------------------------------
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// //1.10
// // a value is a piece of data for example
// // a values is the smallest unit of information in JS
// // it is very useful to store values in to variables
// // using 'let' we declare the variables that can be reused
// console.log('Jonas');
// console.log(23);

// let firstName = 'Jim';
// console.log(firstName);

// // _ and $ can be used when declaring a value

// // eg
// let $function = 27;
// // use the let variable if the value is not going to change

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// //1.12
// // Data Types - every value is either an object or primitive value
// //object = let me = {name:'Jonas'}

// //primitive = let firstName = 'Jonas';
// //let age = 30;
// // a value is only a primitive when it is not an object

// // 7 different primitive types
// // 1. Number - used for decimals and integers
// // 2. Strings - used for text
// // 3. Boolean - logical typae that can only be true or false
// // 4. Undefined - Value taken by a variable that is not yet defined
// // 5. Null - Also means empty value
// // 6. symbol (ES2015- Value that is unique and cannot be changed
// // 7. Biglnt - (ES2020) larger integers than the number type can hold

// // javaScript has a dynamic typing. when you create a variable JS automatically determines the data type

// */

// /*----------------------------------------------------------------------------
// let javaScriptIsFun = true;
// console.log(true);

// // type of is an operator that can identify the type of value
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// // dynamic typing
// javaScriptIsFun = 'Yes!'; // when changing the value of a variable declare without using the let
// console.log(typeof javaScriptIsFun);

// // an example of undefined
// // the value taken of a variable that is not yet defined ( an empty value)
// let year; //eg
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null); //bug in js it id desplayed as an object in the cl. it should return as null
// */

// /*-------------------------------------------------------------------------
// // 1.13

// let age = 30;
// age = 31; // reassigning a value toa variable, mutating the age variable

// const birthYear = 1991; // value cannot be changed at a later time when using const
// // birthYear = 1990;

// // const job;// cannot declare this as well

// // var is a legacy way of defining variables
// var job = 'programmer';
// job = 'teacher';

// */
// /*-------------------------------------------------------------------------
// // 1.14 Basic Operators

// // allows to combine values

// //math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** means 2 to the power of 3 = 2*2*2
// const firstName = 'Jonas';
// const LastName = 'Schmedtmann';
// console.log(firstName, LastName);

// console.log(firstName + ' ' + LastName);

// // assignment operator
// let x = 10 + 5; // 15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x--; //minus 1
// x++; // add 1

// console.log(x);

// //comparison operators
// console.log(ageJonas > ageSarah); // is ageJonas greater than ageSarah// >, <, >=,<=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);
// */

// /*--------------------------------------------------------------------------
// // 1.15 Operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5); //left to right order

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
// */

// /*----------------------------------------------------------------------
// //1.16 coding exercise

// //Test Data 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// // Test Data 2
// // const markMass = 95;
// // const markHeight = 1.88;
// // const johnMass = 85;
// // const johnHeight = 1.76;

// // Test Data 3
// // const markMass = 200;
// // const markHeight = 1.88;
// // const johnMass = 85;
// // const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}. The results indicate that Mark's BMI is higher`
//   );
// } else {
//   console.log(
//     `John's BMI is ${johnBMI} and Mark's BMI is ${markBMI}. The results indicate that John's BMI is higher`
//   );
// }
// */
// /*-------------------------------------------------------------------------
// // 1.17 Strings and template literals

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; // string
// console.log(jonas);

// const js = 'JavaScript ' + ' is ' + ' very ' + ' awesome' + '!!';
// console.log(js);

// const string = 'Making ' + ' strings ' + ' are ' + ' pretty ' + ' Cool';
// console.log(string);

// const int =
//   'Interesting' +
//   ' that ' +
//   ' spaces ' +
//   ' must ' +
//   ' be ' +
//   ' used ' +
//   ' throughout ' +
//   ' the ' +
//   ' string ' +
//   'in' +
//   ' order ' +
//   ' to ' +
//   'maintain' +
//   ' the ' +
//   ' gaps ';
// console.log(int);

// const sim = ` This is literally so much easier to get the information across. Hey ${firstName} !! `;
// console.log(sim);

// // template literals allow us to write strings in a normal way using back ticks
// const jonasNew = `I 'm ${firstName}, a ${year - birthYear} year old ${job}! `;
// console.log(jonasNew);

// // we can use back ticks for any regular String
// console.log(`Just a regular string...`);

// //multi line strings( before ES6)
// console.log('String with \n\
//  multiple \n\
//  lines');
// //\n\ means new line

// console.log(`String
//  multiple
//  lines`);
// */
// /*
// ----------------------------------------------------------------------------------
// //  1.18 Taking decisions if/else statements

// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗');
// } else {
//   // console.log(' Sarah is not old enough to start driving');
//   const yearsLeft = 18 - age;
//   console.log(` Sarah is too young, wait another ${yearsLeft} years`);
// }

// // if() {

// // } else {

// // } // called a control structure

// // const birthYear = 1991;
// // if (birthYear < +2000) {
// //   let century = 20;
// // } else {
// //   let century = 21;
// // }
// // console.log(century); if century is logged it will not be called as it is not defined and hence a code block. you must define it outside for it to work eg.

// let century;
// const birthYear = 2012;
// if (birthYear <= 2000) {
//   // <= (operator) is used to create a condition
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
// */

// /*
// const birthYear = 2001;
// const ageofpilot = 2019 - birthYear;
// console.log(ageofpilot);

// if (ageofpilot >= 21) {
//   console.log(
//     ` The pilot has reached the age of ${ageofpilot} which allows for practal training with a instructor`
//   );
// } else {
//   console.log(
//     ` This person cannot take practice lessons because they have not reached the permissible age `
//   );
// }
// */

// /*-------------------------------------------------------------------------------
// // 1.19 coding challenge

// //Test Data 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// // Test Data 2
// // const markMass = 95;
// // const markHeight = 1.88;
// // const johnMass = 85;
// // const johnHeight = 1.76;

// // Test Data 3
// // const markMass = 200;
// // const markHeight = 1.88;
// // const johnMass = 85;
// // const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// // const markHigherBMI = markBMI > johnBMI;
// // console.log(markBMI, johnBMI, markHigherBMI);

// if (markBMI >= johnBMI) {
//   console.log(
//     `Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}. We can conclude that Mark's BMI is higher than John's`
//   );
// } else {
//   console.log(
//     `John's BMI is ${johnBMI} and Mark' BMI is ${markBMI}. We can conclude that John's BMI is higher than Mark's`
//   );
// }
// */
// /*---------------------------------------------------------------------------
// // 1.20. Type Conversion and Type Coercion

// //Type Conversion

// const inputYear = '1991';
// // console.log(inputYear + 18); // the numeber will not add to the string. it will be displayed as 199118
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // console.log(Number('Jonas')); this will trigger a NaN message meaning Not a Number
// console.log(typeof NaN);
// // Both Number and String need to start with an uppercase letter to work

// console.log(String(23), 23);

// // Type Coercion
// console.log('I am ' + 23 + ' years old'); // the plus operator converts strings into numbers
// console.log('I am ' + '23' + ' years old'); // the results are the same
// console.log('I am ' + String(23) + ' years old'); // if the language does not have the automatic coercion then it would have to be done manually

// // not all operators so type coercion to strings eg
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n); // the result of this would 10 because it executed 1+1 = 11 - 1 = 10
// */

// /*-------------------------------------------------------------------------
// // 1.21 truthy falsy - 5 falsy values: 0, '',undefined, null, NaN
// //- will become  false when it is converted to a boolean

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0; //falsy value so the else statement is written to the console
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job!');
// }

// const money1 = 100; //truthy value so the if statement is written to the console
// if (money1) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job!');
// }

// let height = 123; // since height is undefined it would be a falsy value hence else is executed
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// let height1; // since height is defined it would be a truthy value hence if block is executed
// if (height1) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// */

// /*------------------------------------------------------------------------
//  //1.22

// const age = '18';
// if (age === 18) console.log(' You just became an adult (strict)'); // curly brackets not necessary if it is just one line
// if (age == 18) console.log(' You just became an adult (loose)'); // only this line of code will be executed if the const age is false because of loose (==)

// const favourite = Number(prompt(" What's your favourite number ?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // '23' == 23 this is loose
//   console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else if (favourite === 9) {
//   console.log('9 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

// */

// // /* 1.23 Basic boolean  logic: THE AND, OR & NOT OPERATORS
// //lecture

// /*---------------------------------------------------------------------
// // 1.24 Locgical Operators

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   //! makes opposite hence not is tired
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const hasGameTickets = true;
// const hasClothesForTheGame = true;
// const hasMoneyForFood = false;

// const canGoToTheGame =
//   hasGameTickets && hasClothesForTheGame && hasMoneyForFood;
// console.log(canGoToTheGame);

// if ((hasGameTickets && hasClothesForTheGame) || hasMoneyForFood) {
//   console.log('He can go to the game');
// } else {
//   console.log('He needs to have all items to go to the game!!');
// }

// const hasDownpayment = true;
// const hasJob = true;
// const hasGoodSalary = false;

// const canAffordNewHome = hasDownpayment && hasJob && hasGoodSalary;
// console.log(canAffordNewHome);

// if (hasDownpayment && hasJob && hasGoodSalary) {
//   console.log('John can afford to buy a home');
// } else {
//   console.log('John cannot afford to buy a home');
// }
// */
// /*-------------------------------------------------------------------------
// // 1.25 Challenge

// // const score0Dolphins = (96 + 108 + 89) / 3;
// // const score0Koalas = (88 + 91 + 110) / 3;
// // const score1Dolphins = (97 + 112 + 101) / 3;
// // const score1Koalas = (109 + 95 + 123) / 3;
// // const score2Dolphins = (97 + 112 + 101) / 3;
// // const score2Koalas = (109 + 95 + 106) / 3;

// // console.log(score0Dolphins, score0Koalas);

// // if (score1Dolphins > score1Koalas) {
// //   console.log(`Dolphins Win!!!`);
// // } else if (score1Dolphins === score1Koalas) {
// //   console.log(` Its a draw!!!`);
// // } else {
// //   console.log(`Koalas Win!!!`);
// // }

// // const score0Dolphins = (97 + 112 + 80) / 3;
// // const score0Koalas = (109 + 95 + 50) / 3;
// // console.log(score0Dolphins, score0Koalas);

// // if (score0Dolphins > score0Koalas && score0Dolphins >= 100) {
// //   console.log('Dolphins Win!!!');
// // } else if (score0Koalas > score0Dolphins && score0Koalas >= 100) {
// //   console.log('Koalas Win!!!');
// // } else if (
// //   score0Dolphins === score0Koalas &&
// //   score0Dolphins >= 100 &&
// //   score0Koalas >= 100
// // ) {
// //   console.log('Its a draw!!!');
// // } else {
// //   console.log('No one wins the trophy');
// // }

// */

// /*
// -------------------------------------------------------------------------
// // 1.26 Switch statement
// // the switch statement is a cleaner easier to reads code but is comparable to the if else statement, it is less used and is up to personal preference.

// const day = 'wednesday';

// switch (day) {
//   case 'monday': // dy = 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// //without using the break the code continues executing, break stops the code

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend');
// } else {
//   console.log('Not a valid day');
// }

// // practice switch
// const carBrand = 'bentley';

// switch (carBrand) {
//   case 'alphaRomeo':
//     console.log('Alpha Romeo has a long history of racing');
//     break;
//   case 'bentley':
//     console.log("Bentley's are known for their luxury");
//     break;
//   case 'toyota':
//     console.log('Toyota is known for reliability');
//     break;
//   case 'honda':
//     console.log(
//       'Honda is known for its rational design, economical engineering and performance'
//     );
//     break;
//   case 'ferrari':
//     console.log('Ferrari makes legendary cars');
//     break;
//   case 'Porsche':
//     console.log('Porsche cars have kept similar design throught the years');
//   default:
//     console.log('Not a brand of car');
// }
// */
// /*---------------------------------------------------------------------
// // 1.27 Statement and expressions// a piece of code that provides a value

// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = '23 is bigger';
// } // This is a statement

// console.log(`I'm ${2037 - 1991} years old`); //${} contains the expression. You cannot insert the statement within ${}.
// */
// /*-------------------------------------------------------------------
// //1.28 The Conditional (Tenary) Operator
// // const age = 23;
// // age >= 18
// //   ? console.log('I like to drink juice') // conditional operator
// //   : console.log('I like to drink water');

// const age = 23;
// const drink = age >= 18 ? 'juice' : 'water';
// console.log(drink); // other way of writing it

// // or

// let drink2; // if else
// if (age >= 18) {
//   drink2 = 'juice';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? 'juice' : 'water'}`);
//  */

// /*
// // -----------------------------------------------------------------------
// // 1.29 challenge

// const bill = 40; // 275, 40, 430
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
// );

// */
// /*
// // -------------------------------------------------------------------
// // 1.30 JS releases ES5,ES6+ and ESNext

// // -In 1995 Mocha (first gen) was made by Brendan Eich in 10 days.Brendan
// // -In 1996 Mocha changes to LiveScript, to attract developers, However JavaScript has almost nothing to do with Java. Microsoft launches IE, copying JS from Netscape and calling it JScript.
// //-In 1997 -ECMA releases ECMAScript 1 (ES1), the first official standard for JavaScript (ECMAScript is the standard, JavaScript the language in practice)
// //-2009 ES5 (ECMAScript 5) is released with lots of great new features.
// //- 2015 ES6 (called ES6)(ECMAScript 2015) was released : biggest update to the language ever
// //- 2016 Release of ES2016/ES2017/ES2018/ES2019/ES2020/ES2021/etc smaller updates instead of huge and spaced out updates

// // backward compatability supported
// // forward compatability obviously not supported

// //- How can we use modern JS today - use the most updatd google chrome browser
// // Use Babel to transpile and polyfill your code(converting back to ES5 to ensure browser compatability for all users)

// //-ES5 - fully supported in all browsers(down to IE9 from 2011), read to be used today
// //-ES6+ - well supported in all modern browsers, no support in older browsers, can use most features in production with transpiling and polyfilling
// //- ES2021 and newer - called ESNext: future versions of the language
// */

// // -----------------------------------------------------------------
// // 1.31 intro part 2 Fundamental
// // 1.32 setting up strict mode
// //1.33 Functions

// // function logger() {
// //   console.log('My name is Jonas');
// // }

// // //calling / running / invoking function is what this is called
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //   // these are called parameters
// //   // apples and oragnes are the input data for the function
// //   // console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //   return juice;
// // }

// // // fruitProcessor(5, 0); // these values of the parameters are called the argument

// // const appleJuice = fruitProcessor(5, 0); // now we store this into a variable to use the value that was returned
// // console.log(appleJuice); // now the value was printed to the console by logging the variable
// // // console.log(fruitProcessor(5, 0)); // in this case we logged the result

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // // console.log();// is a type of function
// // // const num = Number('23');//Number is also a type of function, type num in the console in the browser

// // function keyboard(apple, microsoft) {
// //   const brnd = `Apple sold ${apple} keyboards and Microsoft sold ${microsoft} keyboards.`;
// //   return brnd;
// // }

// // const ty1 = keyboard(50, 400);
// // console.log(ty1);

// // const ty2 = keyboard(20, 5420);
// // console.log(ty2);

// // const ty3 = keyboard(4520, 2301);
// // console.log(ty3);

// // ---------------------------------------------------------------
// // 1.34 Function declaratons vs expressions

// // function calcAge1(birthYear) {
// //   // Function Declaration
// //   // const age = 2037- birthYear; //no neet to store this into a variable
// //   // return age; or return age, we can simply do the following
// //   return 2037 - birthYear;
// // }

// // const age1 = calcAge1(1991);
// // console.log(age1);

// // const calcAge2 = function (birthYear) {
// //   //Function expression (storing function into a variable)
// //   return 2037 - birthYear;
// // };
// // const age2 = calcAge2(1991); // the function expression is called the same way and the results are the same
// // console.log(age1, age2);

// // The difference between the declaration and the expression is that the function declaration can be called before defining it. expression cannot be called before defining it. expression forces you to structure your code.

// // -----------------------------------------------------------------------
// // 1.35 Arrow Functions - shorter simplest form
// // no curly brackets needed, no need to return as well.

// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const calcAge3 = birthYear => 2037 - birthYear;
// // const age3 = calcAge3(1991);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //   const age = 2037 - birthYear;
// //   const retirement = 65 - age;
// //   // return retirement;
// //   return `${firstName} retires in ${retirement} years`;
// // };

// // console.log(yearsUntilRetirement(1991, 'Jonas'));
// // console.log(yearsUntilRetirement(1980, 'Bob'));

// //1.36 Functions calling other functions

// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges) {
// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);

// //   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
// //   return juice;
// // }

// // console.log(fruitProcessor(2, 3));

// //1.37 Reviewing Functions

// // const calcAge11 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const yearsUntilRetirement = function (birthYear, firstName) {
// //   const age = calcAge11(birthYear);
// //   const retirement = 65 - age;
// //   if (retirement > 0) {
// //     console.log(`${firstName} retires in ${retirement} years`);
// //     return retirement;
// //   } else {
// //     console.log(`${firstName} is already retired`);
// //     return -1;
// //   }

// //   return retirement;
// //   // return `${firstName} retires in ${retirement} years`;
// // };
// // console.log(yearsUntilRetirement(1991, 'Jonas'));
// // console.log(yearsUntilRetirement(1950, 'Mike'));

// // const avgDolphins = (44 + 23 + 71) / 3;
// // const avgKoalas = (65 + 54 + 49) / 3;

// // // const avgDolphins = (85 + 54 + 41) / 3;
// // // const avgKoalas = (23 + 54 + 27) / 3;

// // console.log(avgDolphins, avgKoalas);

// // // Function
// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(44, 23, 71));

// // // Test 1
// // let scoreD = calcAverage(44, 23, 71);
// // let scoreK = calcAverage(65, 54, 49);
// // console.log(scoreD, scoreK);

// // const checkWinner = (avgDolphins, avgKoalas) => {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     console.log(
// //       `Dolphins average score is ${avgDolphins} and average score of Koalas is ${avgKoalas} so Dolphins win!!`
// //     );
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     console.log(
// //       `Koalas average score is ${avgKoalas} and average score of Dolphins is ${avgDolphins} so Koalas win!!`
// //     );
// //   } else {
// //     console.log(`No team wins`);
// //   }
// // };

// // checkWinner(avgDolphins, avgKoalas);
// // checkWinner(251, 123);
// // checkWinner(123, 456);

// // scoreD = calcAverage(85, 54, 41);
// // scoreK = calcAverage(23, 34, 27);
// // console.log(scoreD, scoreK);
// // checkWinner(scoreD, scoreK);

// // 1.39 Arrays

// // Instead of this
// // const friend1 = 'Michael';
// // const friend2 = 'Steven';
// // const friend3 = 'Peter';

// // const friends = ['Michael', 'Steven', 'Peter'];
// // console.log(friends);

// // //Using the array as a function
// // const years = new Array(1991, 1984, 2008, 2020);

// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(friends.length);
// // console.log(friends[friends.length - 1]); // within [] js expects an expression, not statement

// // // Only primitive values are immutable, an Array is not a primitive value
// // // we can add elements to the array or change..Peter to Jay
// // // We cannot replace the entire array eg
// // // friends = ['Bob', 'Alice']; //eg here
// // friends[2] = 'Jay';
// // console.log(friends);

// // const jonas = ['Jonas', ' Schmedtmann', 2037 - 1991, 'teacher', friends];
// // console.log(jonas);
// // console.log(jonas.length);

// // //Exercise
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };
// // const yrs = [1990, 1967, 2002, 2010, 2018];
// // // console.log(calcAge(yrs));
// // const age1 = calcAge(yrs[0]);
// // const age2 = calcAge(yrs[1]);
// // const age3 = calcAge(yrs[yrs.length - 1]);
// // console.log(age1, age2, age3);

// // const ages = [calcAge(yrs[0]), calcAge(yrs[1]), calcAge(yrs[yrs.length - 1])];
// // console.log(ages);

// // 1.40 Basic Array Operations(Methods)

// // const friends = ['Michael', 'Steven', 'Peter'];
// // // friends.push('Jay'); //Push is a method which is technically a function( which is attached to the friends array)

// // // Push ADDS an element to the END of the array--------
// // const newLength = friends.push('Jay');
// // console.log(friends);
// // console.log(newLength);

// // // unshift - method to ADD to the BEGINING of the array---------
// // friends.unshift('John');
// // console.log(friends);

// // //    REMOVE from the END of the Array

// // // friends.pop();
// // // friends.pop();
// // console.log(friends);
// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // friends.shift(); // REMOVE from the BEGINING
// // console.log(friends);

// // // indexOf
// // console.log(friends.indexOf('Steven')); // tells you which number the element is in the array eg 0,1,2,3 etc

// // console.log(friends.indexOf('Bob')); // this returns -1 because this element is not present in the array

// // //Includes
// // console.log(friends.includes('Steven')); // Includes reveals a true or false answer
// // console.log(friends.includes('Bob')); // includes reveals a false answer in this case

// // 1.41 challenge 2

// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };

// // console.log(calcTip(125));

// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(totals);

// // console.log(bills, tips, totals);

// // 1.42 Intorduction to Objects

// // Array - order matters alot eg [0] or [4]
// // const jonasArray = [
// //   'Jonas',
// //   'Schmedtmann',
// //   2037 + 1991,
// //   'teacher',
// //   ['Michael', 'Peter', 'Steven'],
// // ];

// // // Object - order does not matter when retrieving
// // const jonas = {
// //   firstName: 'Jonas',
// //   lastName: ' Schmedtmann',
// //   agr: 2037 - 1991,
// //   job: 'teacher',
// //   friends: ['Michael', 'Peter', 'Steven'],
// // };

// // 1.43 Dot and Bracket Notation

// // const jonas = {
// //   firstName: 'Jonas',
// //   lastName: 'Schmedtmann',
// //   agr: 2037 - 1991,
// //   job: 'teacher',
// //   friends: ['Michael', 'Peter', 'Steven'],
// // };

// // //  Using the Dot notation we can call specific data
// // console.log(jonas);
// // console.log(jonas.lastName);
// // console.log(jonas['lastName']);

// // //Brackets Notation - cannot use the dot notation here
// // const nameKey = 'Name';
// // console.log(jonas['first' + nameKey]);
// // console.log(jonas['last' + nameKey]);

// // // in this example we can only get results by using the brackets notation
// // const interestedin = prompt(
// //   'What do you want to know about Jonas? Choose between firstName, lastName, age, Job and friends'
// // );
// // console.log(jonas[interestedin]);

// // if (jonas[interestedin]) {
// //   console.log(jonas[interestedin]);
// // } else {
// //   console.log(
// //     'Wrong request! Choose between firstName, lastName, age, Job and friends'
// //   );
// // }

// // jonas.location = 'Portugal';
// // jonas['twitter'] = '@jonasschmedtman';
// // console.log(jonas);

// // // Challenge
// // //make a string from the array - "Jonas has 3 friends, and his best friend is called Michael"

// // console.log(
// //   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// // );

// //1.44 Object Methods...any Function that is attached  to an Expression is a Method
// // const jonas = {
// //   firstName: 'Jonas',
// //   lastName: 'Schmedtmann',
// //   birthYear: 1991,
// //   job: 'teacher',
// //   friends: ['Michael', 'Peter', 'Steven'],
// //   hasDriversLicense: false,

// //   // calcAge: function (birthYear) {
// //   //   return 2037 - birthYear;

// //   // calcAge: function () {
// //   //   console.log(this);
// //   //   return 2037 - this.birthYear;

// //   calcAge: function () {
// //     this.age = 2037 - this.birthYear;
// //     return this.age;
// //   },

// //   getSummary: function () {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// //       this.job
// //     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
// //   },
// // };

// // console.log(jonas.calcAge()); //using the 'this'keyword

// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);

// // // console.log(jonas['calcAge'](1991));

// // //Challenge
// // //"Jonas is a 46- year old teacher, and he has a/ no driver's license"

// // console.log(jonas.getSummary());

// // 1.45 challenge 3

// // BMI = mass/height **2 = mass/ (height *height)

// // const mark = {
// //   fullName: 'Mark Miller',
// //   mass: 78,
// //   height: 1.69,
// //   calcBMI: function () {
// //     this.bmi = this.mass / this.height ** 2;
// //     return this.bmi;
// //   },
// // };

// // const john = {
// //   fullName: 'John Smith',
// //   mass: 92,
// //   height: 1.95,
// //   calcBMI: function () {
// //     this.bmi = this.mass / this.height ** 2;
// //     return this.bmi;
// //   },
// // };

// // mark.calcBMI();
// // john.calcBMI();

// // console.log(mark.bmi, john.bmi);

// // if (mark.bmi > john.bmi) {
// //   console.log(
// //     ` ${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s bmi (${john.bmi})`
// //   );
// // } else if (john.bmi > mark.bmi) {
// //   console.log(
// //     `  ${john.fullName}'s BMI (${john.bmi}) is  higher than ${mark.fullName}'s BMI (${mark.bmi})`
// //   );
// // }

// // 1.46 Looping

// // eg

// // console.log('Lifting weights repetition 1');
// // console.log('Lifting weights repetition 2');
// // console.log('Lifting weights repetition 3');
// // console.log('Lifting weights repetition 4');
// // console.log('Lifting weights repetition 5');
// // console.log('Lifting weights repetition 6');
// // console.log('Lifting weights repetition 7');
// // console.log('Lifting weights repetition 8');
// // console.log('Lifting weights repetition 9');
// // console.log('Lifting weights repetition 10');

// // for loop keep running while condition is true

// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`Lifting weights repetition ${rep}`);
// // }

// // // 1.47

// // const jonas = [
// //   'Jonas',
// //   'Schmedtmann',
// //   2037 - 1991,
// //   'teacher',
// //   ['Michael', 'Peter', 'Steven'],
// //   true,
// //   true,
// // ];

// // const types = [];
// // // console.log(jonas[0]);
// // // console.log(jonas[1]);
// // // console.log(jonas[2]);
// // // console.log(jonas[3]);
// // // console.log(jonas[4]);

// // for (let i = 0; i < jonas.length; i++) {
// //   console.log(jonas[i], typeof jonas[i]);

// //   // Filling types of array
// //   // types[i] = typeof jonas[i];

// //   types.push(typeof jonas[i]);
// // }

// // console.log(types);

// // const years = [1991, 2007, 1969, 2020];
// // const ages = [];

// // for (let i = 0; i < years.length; i++) {
// //   ages.push(2037 - years[i]);
// // }
// // console.log(ages);

// // // continue and break
// // console.log('------------Only Strings------------');
// // for (let i = 0; i < jonas.length; i++) {
// //   if (typeof jonas[i] !== 'string') continue;
// //   console.log(jonas[i], typeof [i]);
// // }

// // // continue and break
// // console.log('------------Breal With Number------------');
// // for (let i = 0; i < jonas.length; i++) {
// //   if (typeof jonas[i] !== 'number') break;
// //   console.log(jonas[i], typeof [i]);
// // }

// // 1.49 while loop

// // let rep = 1;
// // while (rep <= 10) {
// //   // console.log(`WHILE: Lifting weights repetition ${rep}`);
// //   rep++;
// // }

// // let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// // while (dice !== 6) {
// //   console.log(`You rolled a ${dice}`);
// //   dice = Math.trunc(Math.random() * 6) + 1;
// //   if (dice === 6) console.log(`Loop is about to end...`);
// // }

// //1.50 challenge

// // const calcTip = function (bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };

// // console.log(calcTip(22));

// // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// // const tipps1 = [];
// // const totals = [];

// // for (let i = 0; i < bills.length; i++) {
// //   const tip = calcTip(bills[i]);
// //   tipps1.push(tip);
// //   totals.push(tip + bills[i]);
// // }

// // console.log(bills, tipps1, totals);

// // const calcAverage = function (arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     // sum = sum + arr[i]; this is the same as bellow
// //     sum += arr[i];
// //   }
// //   // console.log(sum);
// //   return sum / arr.length;
// // };

// // console.log(calcAverage([2, 3, 7]));
// // console.log(calcAverage(totals));
// // console.log(calcAverage(tipps1));

// // 1.59

// //Problem  - We work for a company building a smart home thermometer. Our most recent task is this:"Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// //1 understanding the problem
// //-what id temp amplitude? answer: differenve between hihest and lowest temp
// //-how to compute max and min temps?
// //= What's a sensor error? and what to do?

// // 2. Breaking into sub problems
// // - how to ignore errore?
// // -find max value in temp array
// //- find min value in temp array
// //-Subtract min from max (amplitude)and return it

// // const calcTempAmplitude = function (temps) {
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];

// //     if (typeof curTemp !== 'number') continue;
// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }
// //   console.log(max, min);
// //   return max - min;
// // };

// // // calcTempAmplitude([3, 7, 4, 1, 8]);
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);

// //Problem 2
// // Function should now receive 2 arrays of temps

// //1) Understanding the problem
// //- With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// //2) Breaking up into sub Problems
// //- How to merge 2 arrays?

// // Merging two arrays in below( copied from above)

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([3, 7, 4, 1, 8]);
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// 1.60 debugging
//1.61 debugging with the console and breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C - Fix the bug
    // value: prompt('Degrees Celcius'), // Problem!!   -  was that the value is a string so it was adding  the string to the prompt
    // value: Number(prompt('Degrees Celcius')), //FIX!!!!
    value: 10,
  };

  // B find the bug
  console.log(measurement);

  // this gives a table
  console.table(measurement);

  //   you can also use console. warn and console . error

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A - Identify the bug
console.log(measureKelvin());

//Using a debugger in google chrome

// Secondary example of a bigger Bug - Using a DEBUGGER

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    // callung Debugger from your code
    // debugger;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//A - Identify the Big
console.log(amplitudeBug);
