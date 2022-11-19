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

/*-------------------Conditional Operator-------------------------
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

/*
*/
// const battery = 3000;
// const ba =
//   battery >= 2000 && battery <= 4000
//     ? 'The battery is fully charged'
//     : 'The battery is ovecharged';
// console.log(ba);

// const battery2 = 450;
// const ba2 =
//   battery2 >= 400 && battery2 <= 500
//     ? 'The battery has good capacity'
//     : 'The battery is overcharged';
// console.log(ba2);

// const oilChange = 50;
// const ch =
//   oilChange >= 40 && oilChange <= 100 ? oilChange * 0.13 : oilChange * 0.2;
// console.log(ch);
// console.log(
//   `The bill for the oil change is $${oilChange + ch}, taxes included`
// );

// practice challenge

// const bill1 = 500;

// const tip1 = bill1 >= 70 && bill1 <= 500 ? bill1 * 0.1 : bill1 * 0.15;
// console.log(
//   `The bill was $${bill1}, the tip was $${tip1} and the total was $${
//     bill1 + tip1
//   }`
// );

// const bill2 = 60;

// const tip2 = bill2 >= 50 && bill2 <= 100 ? bill2 * 0.15 : bill2 * 0.2;
// console.log(
//   `The bill is $${bill2}, the tip is $${tip2} and the total is $${bill2 + tip2}`
// );

// const price = 25;

// const discount = price >= 20 && price <= 50 ? price * 0.15 : price * 0.35;
// console.log(
//   `If the price is $${price} and the discount is $${discount}, then the total price after discount is $${
//     price - discount
//   }`
// );

// const price1 = 275;
// const discount1 =
//   price1 >= 250 && price1 <= 350 ? price1 * 0.25 : price1 * 0.15;
// console.log(
//   `If the price is $${price1} and the discount is $${discount1}, the total cost is $${
//     price1 - discount1
//   }`
// );

// const price2 = 224.61;
// const discount2 =
//   price2 >= 200 && price2 <= 300 ? price2 * 0.32 : price2 * 0.45;
// console.log(
//   `If the original price is $${price2} and the discount is $${discount2}, then the total cost is $${
//     price2 - discount2
//   }`
// );

// const price3 = 101.5;
// const tax = price3 >= 50 && price3 <= 100 ? price3 * 0.15 : price3 * 0.25;
// console.log(
//   `If the price is $${price3} and the tax is ${tax}% the total cost is $${
//     price3 + tax
//   }`
// );

// 1.33 ---------------Functions----------------------------------------------
// function reptile() {
//   console.log('frog');
// }

// reptile();

// function reptile(frog, aligators, ducks) {
//   const amphibian = `There are ${frog} frogs and ${aligators} Aligators in the swamp. Sometimes ${ducks} ducks can be found by the swamp, although it is not a reptile`;
//   return amphibian;
// }

// const rep = reptile(50000, 3, 2);
// console.log(rep);

// const rep2 = reptile(35000, 72, 5);
// console.log(rep2);

// const rep3 = reptile(3, 5, 7);
// console.log(rep3);

// const rep4 = reptile(6, 4, 8);
// console.log(rep4);

// function typesOfBakedItems(bread, croissant, bagel) {
//   const bakery = `There are ${bread} loaves of bread, ${croissant} bags of croissants and ${bagel} boxes of bagels in the bakery`;
//   return bakery;
// }

// const bread = typesOfBakedItems(50, 20, 30);
// console.log(bread);

// const bread2 = typesOfBakedItems(400, 50, 30);
// console.log(bread2);

// const bread3 = typesOfBakedItems(152, 3521, 6422);
// console.log(bread3);

// function watch(samsung, apple) {
//   const brandOfWatch = `In Canada there are ${samsung} Samsung watch sales and ${apple} Apple watch sales per year.`;
//   return brandOfWatch;
// }

// const sales = watch(35, 72);
// console.log(sales);

// const sales2 = watch(750, 745);
// console.log(sales2);

// const sales3 = watch(452, 352);
// console.log(sales3);

// function paper(kirkland, scott) {
//   const pa = `${kirkland} people buy Kirkland tissue paper and ${scott} people purchase Scott tissue`;
//   return pa;
// }

// const papr = paper(50, 400);
// console.log(papr);

// 1
// const ketchup = function (heinz) {
//   return `${heinz} sales of Heinz ketchup is not bad for the day.`;
// };

// const k1 = ketchup(25);
// console.log(k1);

// // 2
// const ketchup2 = function (French) {
//   return `${French} sales of French ketchup is a good amount of sales.`;
// };

// const k2 = ketchup2(35);
// console.log(k2);

// // 3
// const ketchup3 = function (franks) {
//   return `There are ${franks} bottles of Franks ketchup left.`;
// };

// const k3 = ketchup3(60);
// console.log(k3);

// const pepper = ripe => 100 - ripe;
// const chilli = pepper(52);
// console.log(chilli);

// const harvest = (ripe, red) => {
//   const days = 100 - ripe;
//   const picking = 10 - days;
//   return `When the pepper is ${red} days old it will be red which means that it has ${picking} days to be harvested`;
// };
// console.log(harvest(100, 80));

// const time = cookTime => 40 - cookTime;
// const ct = time(15);
// console.log(ct);

// const timeRemaining = (cookTime, nameOfDish) => {
//   const remaining = 50 - cookTime;
//   const finished = 60 - remaining;
//   // return finished;
//   return `The ${nameOfDish} will be finished in ${cookTime} minutes. `;
// };

// console.log(timeRemaining(30, 'beef stew'));

//1.36 Functions calling othe functions
// example 1
// function bowlsOfPortions(por) {
//   return por * 5;
// }

// function portion(chicken, friedRice) {
//   const bowlsOfChicken = bowlsOfPortions(chicken);
//   const bowlsOfRice = bowlsOfPortions(friedRice);

//   const dish = `Table four need ${bowlsOfRice} portions of Fried Rice and ${bowlsOfChicken} portions of Chicken.`;
//   return dish;
// }

// console.log(portion(5, 3));

// // example 2

// function replacement(newHires) {
//   return newHires * 2;
//   // return (newHires = `if the employees are new hires then they need 2 devies`);// this works as well
// }

// function devices(apple, lenovo) {
//   const appleHires = replacement(apple);
//   const lenovoHires = replacement(lenovo);
//   const laptops = `Ontario has ${appleHires} orders of Apple devices and ${lenovoHires} orders of Lenovo devices `;
//   return laptops;
// }

// console.log(devices(250, 300));

// 1.38 challenge ---------------------------------------------------
// console.log(avgDolphins, avgKoalas);

// // Function
// const calcAverage1 = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage1(44, 23, 71));

// // Test 1
// const scoreD1 = calcAverage1(44, 23, 71);
// const scoreK1 = calcAverage1(65, 54, 49);
// console.log(scoreD1, scoreK1);

// const checkWinner1 = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas) {
//     console.log(
//       `Dolphins average score is ${avgDolphins} and average score of Koalas is ${avgKoalas} so Dolphins win!!`
//     );
//   } else {
//     console.log(
//       `Koalas average score is ${avgKoalas} and average score of Dolphins is ${avgDolphins} so Koalas win!!`
//     );
//   }
// };

// console.log(checkWinner1(avgDolphins, avgKoalas));

// 1.39 Arrays
// const drnk = ['Pepsi', 'Fanta', 'Coke', 'Dr Pepper', 'A&W'];
// console.log(drnk);
// console.log(drnk.length);
// console.log(drnk.length - 1);
// console.log(drnk[3]);

// const tools = ['Wrench', 'Socket', 'Pliers', 'Screw Driver'];
// console.log(tools);
// console.log(tools.length);
// console.log(tools.indexOf('Socket'));

// //Add front element
// tools.unshift('Torque Wrench', 'line wrench');
// console.log(tools);

// //Remove front element
// tools.shift();
// console.log(tools);
// tools.shift();
// console.log(tools);

// //Add last element
// tools.push('Crescent');
// console.log(tools);
// tools.push('Slip jaw');
// console.log(tools);

// // Remove last element
// tools.pop();
// console.log(tools);
// tools.pop();
// console.log(tools);

// console.log(tools.indexOf('Pliers')); //location in array
// console.log(tools.indexOf('Drill Bit')); // if not in the array a -1 will appear
// console.log(tools.includes('Screw Driver')); // is this in the array true
// console.log(tools.includes('Drill Bit')); //  will wriet false if it is not in the array

// const calcTip1 = function (bill1) {
//   return bill1 >= 100 && bill1 <= 500 ? bill1 * 0.2 : bill1 * 0.3;
// };

// console.log(calcTip1(250));

// const bills1 = [175, 542, 325];

// const tips1 = [calcTip1(bills1[0]), calcTip1(bills1[1]), calcTip1(bills1[2])];

// const totals1 = [
//   bills1[0] + tips1[0],
//   bills1[1] + tips1[1],
//   bills1[2] + tips1[2],
// ];

// console.log(bills1, tips1, totals1);

// 1.43

// const dog = {
//   name: 'Spike',
//   hair: 'Brown',
//   eyes: 'Black',
//   height: 20,
//   favouriteFood: 'Beef Steak',
//   tricks: 'roll over',
// };

// console.log(dog);

// const pet = prompt(
//   'If you would like information about Spike choose between name, hair, eyes, height, favouriteFood,tricks'
// );
