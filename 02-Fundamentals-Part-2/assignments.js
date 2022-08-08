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
