'use strict';

// const string = 'This ' + ' is ' + ' a ' + ' string ';
// console.log(string);

// const tl = `This is a template literal and it is a much easier way of writing information to the console`;
// console.log(tl);

// const fish0 = 'Dolphins';
// const fish1 = 'Sardines';
// const fish2 = 'Sharks';
// const dolphin = 70;
// const sardine = 50;
// const shark = 30;

// const fish = `There are many types of fish in the Ocean. Some include ${fish0}, ${fish1} and ${fish2}.`;
// console.log(fish);

// if (dolphin > 20) {
//   console.log(`There are more ${fish0} than ${fish2}`);
// } else {
//   console.log(`There are more ${fish2} than ${fish1}`);
// }

/*-------------------
// 1.28
const score = 19; // conditional operator
const player = score >= 20 ? 'win' : 'loose';
console.log(player);

const fuel = 49;
const fillUp = fuel >= 50 ? 'Uses a lot of fuel' : 'Is very economical';
console.log(fillUp);

const speed = 5000;
const hdd =
  speed >= 7000 ? 'This HDD is very fast' : 'This HDD is not very fast';
console.log(hdd);

const legalSpeed = 50;
const mph =
  legalSpeed >= 50 ? 'You must slow down' : 'You are driving at a safe speed';
console.log(mph);

const temp = 65;
const foodTemp =
  temp >= 60
    ? 'This temperature is safer for storing food'
    : 'This is below the temperature to store food';
console.log(foodTemp);


*/

// practice challenge

const bill1 = 500;

const tip1 = bill1 >= 70 && bill1 <= 500 ? bill1 * 0.1 : bill1 * 0.15;
console.log(
  `The bill was $${bill1}, the tip was $${tip1} and the total was $${
    bill1 + tip1
  }`
);

const bill2 = 60;

const tip2 = bill2 >= 50 && bill2 <= 100 ? bill2 * 0.15 : bill2 * 0.2;
console.log(
  `The bill is $${bill2}, the tip is $${tip2} and the total is $${bill2 + tip2}`
);

const price = 25;

const discount = price >= 20 && price <= 50 ? price * 0.15 : price * 0.35;
console.log(
  `If the price is $${price} and the discount is $${discount}, then the total price after discount is $${
    price - discount
  }`
);

const price1 = 275;
const discount1 =
  price1 >= 250 && price1 <= 350 ? price1 * 0.25 : price1 * 0.15;
console.log(
  `If the price is $${price1} and the discount is $${discount1}, the total cost is $${
    price1 - discount1
  }`
);

const price2 = 224.61;
const discount2 =
  price2 >= 200 && price2 <= 300 ? price2 * 0.32 : price2 * 0.45;
console.log(
  `If the original price is $${price2} and the discount is $${discount2}, then the total cost is $${
    price2 - discount2
  }`
);

// const price3 = 50.5;
// const tax = price3 <= 50 && price3 >= 100 ? price3 * 0.15 : price3 * 0.25;
// console.log(
//   `If the price is $${price3} and the tax is ${tax}% the total cost is $${
//     price3 + tax
//   }`
// );??
