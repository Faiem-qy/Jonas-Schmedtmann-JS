'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //El is for element
const score1El = document.getElementById('score--1'); //get element by ID
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const init = function () {
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;

  score0El.textContent = 0;
  score1El.textContext = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice functionality
// 1.Generating a randome dice roll
const dice = Math.trunc(Math.random() * 6) + 1;
//2. Display dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

btnRoll.addEventListener('click', function () {
  //3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // current0El.textContent = currentScore; // change later from this to the above
  } else {
    //switch to the next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1. add current score to active player's score
  scores[activePlayer] += currentScore;

  // scores[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check if player' score is >= 100
  // finish game

  // switch to the next player
  switchPlayer();
});
