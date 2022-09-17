'use strict';
/*

console.log(document.querySelector('.message').textContent);

// 7.2-7.4
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// const x = function () {
//   console.log(44);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '👻NO Number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score = score - 1; // or score --;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥💢You Lost the game!!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!';
      score = score - 1; // or score --;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥💢You Lost the game!!';
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = 'too low!';
      // score--;
      // document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  ac;
  document.querySelector('.score').textContent = score; //or 20
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
