'use strict';


// const massCorbin = 78
// const heightCorbin = 1.69;
// const massMary = 92;
// const heightMary = 1.95;

// const massCorbin = 95
// const heightCorbin = 1.88;
// const massMary = 85;
// const heightMary = 1.76;

// const BMICorbin = (massCorbin / heightCorbin) ** 2;
// const BMIMary = (massMary / heightMary) ** 2;
// console.log(BMICorbin, BMIMary);


// const age = 22;

// if (age >= 18) {
//     console.log('Jenny can start driving.');
// } else {
//     const yearsLeft = 21 - age;
//     console.log(`Jenny has to wait ${yearsLeft} years`);
// }

/*

function animals(squirrel, dogs, cats) {
    console.log(squirrel, dogs, cats)
    const pets = (`Many people have ${squirrel} squirrels, ${dogs} dogs and ${cats}  cats.`)
    return pets;
}

// animals(1, 3, 5);
const typesOfPets = animals(2, 3, 5);
console.log(typesOfPets);


function devices(apple, samsung) {
    console.log(apple, samsung);
    const mobileDevices = (`Most people had ${apple} apple ${samsung} samsung devices`);
    return mobileDevices;
}

const personalDevices = devices(2, 2);
console.log(personalDevices);

*/


/*
// const testName = 'Prince';
// console.log(testName);

//practice of functions P1
function cars(toyota, honda, mercedes, porsche) {
    // console.log(toyota, honda, mercedes, porsche);//not needed
    const brands = `There are ${honda} honda cars, ${toyota} toyota cars ${mercedes} Mercedes cars and ${porsche} porsches in the parking lot`;
    return brands;
}

const howManyCars = cars(26, 42, 12, 15);
console.log(howManyCars);// this can produce the string
console.log(cars(26, 42, 12, 15));// as well as this

const howManyGoodCars = cars(26, 42, 0, 26)
console.log(howManyGoodCars);

// P2
function cereal(captinCrunch, cornFlakes, pebbles) {
    const brandOfCereal = `Monthly sales of cereal was as follow. Captin Crunch was ${captinCrunch} boxes . CornFlakes was ${cornFlakes} boxes and Pebbles was ${pebbles} boxes respectively.`;
    return brandOfCereal;
}

const cerealSales = cereal(500, 400, 300);
console.log(cerealSales);


// 3.4 function declarations and expressions

// function declaration
// const games = 2000 - gamesPlayed; //no need for this line simply remove 2000 - gamesPlayed and add it to the return value. can be called first before declaring it
// const youngerAges = totalGames(1500);// called before

function totalGames(gamesPlayed) {
    return 2000 - gamesPlayed;
}

const games1 = totalGames(1500);
// console.log(games1);

//function expression (I prefer to us eto maintain order)
const totalGames2 = function (gamesPlayed) {
    return 2000 - gamesPlayed;
}
const games2 = totalGames2(1200);

console.log(games1, games2);

// 3.5 arrow function practice
// 1.0
// const games3 = gamesPlayed => 2000 - gamesPlayed;
// const games = games3(850);
// console.log(games);

// const yearsUntilNewConsole = gamesPlayed => {// it there are multiple parameters then we need to wrap the parameter in parenthesis
//     const date = 2000 - gamesPlayed;
//     const releaseDate = 1200 - date;
//     return releaseDate;//return statement is needed here
// }

// console.log(yearsUntilNewConsole(1300));

// 2.0
const yearsUntilNewConsole = (gamesPlayed, firstName) => {// it there are multiple parameters then we need to wrap the parameter in parenthesis and add paramete, as seen here.
    const date = 2000 - gamesPlayed;
    const releaseDate = 1200 - date;
    // return releaseDate;
    return `${firstName} plays ${gamesPlayed} games`;
}

console.log(yearsUntilNewConsole(1300, 'Bobby'));
console.log(yearsUntilNewConsole(1300, 'Fred'));
*/

/*
// functions calling other functions
function quantityOfVegetables(veg) {
    return veg * 1;
}

function vegySalad(lettuce, onions, carrots) {
    const amountOfLettuce = quantityOfVegetables(lettuce);
    const amountOfOnions = quantityOfVegetables(onions);
    const amountOfCarrots = quantityOfVegetables(carrots);

    const salads = `Some people like ${amountOfLettuce} lettuce, ${amountOfOnions} onions and ${amountOfCarrots} carrots in their salad`;
    return salads;
};

console.log(vegySalad(2, 5, 3));


// 3.7 practice reviewing functions

const calcAge = function (dateOfBirth) {
    return 2052 - dateOfBirth;
}

const yearsUntilRetirement = function (dateOfBirth, lastName) {
    const age = calcAge(dateOfBirth)
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${lastName} retires in ${retirement} years`);
        return +1
    } else if (retirement < 10) {
        console.log(`${lastName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${lastName} retires in ${retirement} years`);
        return -1;
    }


}

console.log(yearsUntilRetirement(2000, 'Edward'));
console.log(yearsUntilRetirement(1900, 'Marley'));
*/

/*
function salad(carrots, cucumbers) {
    console.log(carrots, cucumbers);
    const vegan = `Salads with ${carrots} pieces of carrots and ${cucumbers} pieces of cucumbers make for a filling meal`
    return vegan;
}

const healthy = salad(3, 2);
console.log(healthy);
*/


// 3.9 arrays practice

/*
const friend1 = 'Jerry';
const friend2 = 'Fred';
const friend3 = 'Lewis';// instead of all this

const friends = ['Jerry', 'Fred', 'Lewis', 'Kirby'];//one way - first element is [0, 1, 2]
console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020);// another way(more ususal)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length);// getting number of elements in the array (called a property)
console.log(friends[friends.length - 1]);//(expects an expression, not a statement)

friends[2] = 'James';// change the element of the array.(Arrays can be mutated as per element)
console.log(friends);

//friends = ['Bob. 'Alice];// cannot be done to replace the entire array

const firstName = 'Jim';
const jim = [firstName, 'Clark', 2032 - 1960, 'racer', friends];// compiling all relevant data in one data structure. firstname, lastname, age , profession and array
console.log(jim);
console.log(jim.length);

// exercise
const calcAge = function (birthyear) {
    return 2055 - birthyear;
}

const years = [1950, 1962, 2015, 2022];

console.log(calcAge(years)); //cannot do this

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0])], calcAge(years[1]), calcAge(years[years.length - 1]);???????
console.log(ages);
*/

// 4.1

/*
// const bill = 125;
// const bill2 = 555;
// const bill3 = 44;

const jacob = {// objects practice
    firstName: 'Jacob',
    lastName: 'Frenchy',
    age: 2023 - 1987,
    hairColor: 'Blue',
    hobby: ['Racing', 'eductaion'],
    job: 'Contractor',
    eyeColor: 'violet',
    friends: ['Jim', 'Fred', 'Bob', 'James'],
    favouriteFood: 'Pie',
    pet: 'dog',
};

// console.log(jacob['lastName']);

// const nameKey = 'Name';
// console.log(jacob['first' + nameKey]);
// console.log(jacob['last' + nameKey]);


const details = prompt('Information about Jacob. Choose between firstName, lastName, age, hairColor, hobby, job, eyeColor, friends, favouriteFood and pet');



if (jacob[details]) {//codeblock for error
    console.log(jacob[details]);
} else {
    console.log(`Wrong entry! Please choose between firstName, lastName, age, hairColor, hobby, job, eyeColor, friends, favouriteFood and pet`);
}

console.log(jacob.friends.length);//length


// another challenge
// 'Jacob has 4 friends and he is eager to meet new people. He enjoys his job as a contractor. Favourite food is Pie and his pet of choice is a dog.'

console.log(`Jacob has ${jacob.friends.length} friends and he is eager to meet new people. He enjoys his job as a ${'job'}. His favourite food is ${'favouriteFood'} and his pet of choice is a ${'pet'}`);

*/
/*
// assignment challenge 3

const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 20,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return - this.bmi;
    },
}

const john = {
    fullName: 'John Smith',
    height: 1.95,
    weight: 95,

    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return - this.bmi;
    },
};


mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}.`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}.`);
}
*/

/*
// practice loop 1
for (let rep = 1; rep <= 50; rep++) {
    console.log(`I like car#${rep}`);
}

// practice loop 2
for (let rep = 256; rep <= 280; rep++) {
    console.log(`I am not a pencil ${rep}`);
}

// practice loop 3
for (let rep = 1; rep <= 20; rep++) {
    console.log(`I have ${rep} chicken`)
}
// practice 4
for (let rep = 2; rep <= 30; rep++) {
    console.log(`I have ${rep} and chips`);
}

for (let rep = 4; rep <= 8; rep++) {
    console.log(`to eat with ${rep} forks`);
}

//practice 4
for (let rep = 3; rep <= 6; rep++) {
    console.log(`lets have ${rep} drinks`);
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`I have ${rep} pencils!`)
    console.log(`I have ${rep} bananas`)
    console.log(`This is ${rep} times interesting`)
}

for (let rep = 2; rep <= 3; rep++) {
    console.log(`How amazing is this x${rep}`)
}
*/

/*
// loop within a loop practice

for (let bag = 1; bag <= 10; bag++) {
    console.log(`I have ${bag} bag of apples`);

    for (let apples = 1; apples <= 10; apples++) {
        console.log(`Bag ${bag}: apple # ${apples} `);
    }
}

for (let basket = 1; basket <= 3; basket++) {
    console.log(`I have ${basket} baskets`);

    for (let fruits = 1; fruits <= 8; fruits++) {
        console.log(` Basket # ${basket} : Fruit #${fruits} is in this basket`);
    }
}

for (let parkingLot = 1; parkingLot <= 2; parkingLot++) {
    console.log(` There are ${parkingLot} parking lots.`)

    for (let cars = 1; cars <= 200; cars++) {
        console.log(` car # ${cars} is located in parking lot # ${parkingLot} `);
    }
}

for (let paint = 1; paint <= 5; paint++) {
    console.log(` WHen using this color # ${paint} to paint`);

    for (let coats = 1; coats <= 3; coats++) {
        console.log(`It is recommended for paint # ${paint}, apply ${coats} coats`)
    }
}
*/


// 4.7 Looping arrays, breaking and continuing practice
/*
const score = [50, 20, 6, 427];
const sc = [];

for (let s = 0; s < score.length; s++) {
    sc.push(1000 - score[s]);
    //if (typeof score[s] === 'number') break;// break statement, stops after first number is found
}
console.log(sc);
// const types = [];
*/

/*
const roy = [
    'Rpy',
    'Moss',
    2037 - 1991,
    'IT',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let r = 0; r < roy.length; r++) {
    console.log(roy[r], typeof roy[r]);

    //filling types array one way
    // types[r] = typeof roy[r];// find types of a

    // another way
    types.push(typeof roy[r]);
}

console.log(types);


const years = [2022, 2021, 2020, 2019];
const ages = [];

for (let y = 0; y < years.length; y++) {
    ages.push(2037 - years[y]);
}

console.log(ages);
*/

/*
//p1
const orders = [50, 25, 72, 48, 66]
const nu = [];

for (let nn = 0; nn < orders.length; nn++) {
    nu.push(200 - orders[nn]);
}

console.log(nu);

//p2
const numbersOfLego = [5000, 3000, 2570, 1750]
const pieces = [];

for (let l = 0; l < numbersOfLego.length; l++) {
    pieces.push(17500 - numbersOfLego[l]);
}
console.log(pieces);
*/

/*
// 4.8

const dog = [
    'Sam',
    2020 - 2010,
    'terrier',
    'white',
];

for (let d = 0; d < dog.length; d++) {
    console.log(dog[d]);
}

for (let paint = 1; paint < 5; paint++) {
    console.log(`Every car that passes through the plant needs ${paint} coats of paint`);

    for (let coats = 1; coats < 6; coats++) {
        console.log(`${coats} layer/s of clear coat is required`);
    }
}
*/

/*
// 4.9 practice
let repp = 1;
while (repp <= 10) {
    console.log(`Lifting weights repetition ${repp}`);
    repp++;
}
*/

/*
let nnumber = Math.trunc(Math.random() * 20) + 1;

while (nnumber !== 20) {
    console.log(`Number ${nnumber} has been selected`);
    nnumber = Math.trunc(Math.random() * 20) + 1;
    if (nnumber === 7) console.log('You got lucky number 7');
}
*/
/*

let chance = Math.trunc(Math.random() * 20) + 1;

while (chance !== 15) {
    console.log(`Number ${chance} has been selected`);
    chance = Math.trunc(Math.random() * 20) + 1;
    if (chance === 7) console.log('You got lucky number 7');
}

*/

/*
const clcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}

const billss = [22, 295, 176, 270, 100, 105, 10, 1100, 760, 52];
const tipps = [];
const totalss = [];

for (let i = 0; i < billss.length; i++) {
    const tipp = clcTip(billss[i]);
    tipps.push(tipp);
    totalss.push(tipp + billss[i]);
}

console.log(billss, tipps, totalss);

const calcAvg = function (arrr) {
    let sum = 0;
    for (let ii = 0; ii < arrr.length; ii++) {
        sum = sum + arrr[ii]
    }
    return sum / arrr.length
}
console.log(calcAvg([5, 6, 7]));
console.log(calcAvg(totalss));
console.log(calcAvg(tipps));
*/


// 5.5

