/*
const country = "Trinidad";
const continent = "South America";
let population = 3;
const isIsland = true;
let language = "English";
console.log(country);
console.log(continent);
console.log(population);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(population / 2);
population++;
console.log(population);
console.log(population < 6);
console.log(population < 33);
const description =
    country +
    ' is in ' +
    continent +
    ' and it\'s ' +
    population +
    ' million people speak ' +
    language;
console.log(description);
*/

// 1.16
//BMI = mass / height ** 2 = mass / (height * height)//(mass in kg and height in meter)

/*
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
*/





let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI)

console.log(markBMI)
console.log(johnBMI)
console.log(markHigherBMI)
// or console.log(markBMI, johnBMI, markHigherBMI);

/*
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
*/

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

/*
coding challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/

if (markBMI > johnBMI) {
    console.log(`$(markBMI) is higher than John's`);
} else {
    console.log(`John is higher than Mark's`)
};

// 1.18




