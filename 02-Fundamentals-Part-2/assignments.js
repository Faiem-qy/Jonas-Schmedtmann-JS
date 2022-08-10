'use strict';

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


// const bill = 125;
// const bill2 = 555;
// const bill3 = 44;

// const jacob = {// objects practice
//     firstName: 'Jacob',
//     lastName: 'Frenchy',
//     age: 2023 - 1987,
//     hairColor: 'Blue',
//     hobby: 'Racing',
//     job: 'Contractor',
//     eyeColor: 'violet',
// };

// console.log(jacob);
