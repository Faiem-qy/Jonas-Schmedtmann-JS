'use strict';

const string = 'This ' + ' is ' + ' a ' + ' string ';
console.log(string);

const tl = `This is a template literal and it is a much better way of writing information to the console`;
console.log(tl);

const fish0 = 'Dolphin';
const fish1 = 'Sardine';
const fish2 = 'Shark';
const dolphin = 70;
const sardine = 50;
const shark = 30;

const fish = `There are many types of fish in the Ocean. Some include ${fish0}, ${fish1} and ${fish2}.`;
console.log(fish);

if (dolphin > 20) {
  console.log(`There are more ${fish0} than ${fish2}`);
} else {
  console.log(`There are more ${fish2} than ${fish1}`);
}
