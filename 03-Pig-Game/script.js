'use strict';

//Selecting Elements
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const playerBg0 = document.querySelector(`.player--0`);
const playerBg1 = document.querySelector(`.player--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const numHide = () => {
  diceEl.classList.add(`hidden`);
};
const numShow = () => {
  diceEl.classList.remove(`hidden`);
};

const newGame = () => {
  numHide();
  score0El.textContent = 0;
  score1El.textContent = 0;
  playerBg1.classList.remove(`player--active`);
  playerBg0.classList.add(`player--active`);

  currScore0 = 0;
  currScore1 = 0;
  currentScore = 0;
  activePlayer = 0;

  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
};

//Starting Conditions
numHide();
let currScore0 = 0;
let currScore1 = 0;
let currentScore = 0;
let activePlayer = 0;

//Roll Dice
btnRoll.addEventListener(`click`, () => {
  //1. Generate a random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  numShow();
  diceEl.src = `dice-${dice}.png`;

  //3. If "1" Switch to next player

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    playerBg1.classList.toggle(`player--active`);
    playerBg0.classList.toggle(`player--active`);
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  }
});

btnHold.addEventListener(`click`, () => {
  if (activePlayer === 0) {
    currScore0 += currentScore;
    score0El.textContent = currScore0;
    playerBg1.classList.toggle(`player--active`);
    playerBg0.classList.toggle(`player--active`);
    if (currScore0 >= 100) {
      alert(`Player 1 Wins! With a score of ${currScore0}`);
      newGame();
    }
    console.log(currentScore, currScore0);
  } else {
    currScore1 += currentScore;
    score1El.textContent = currScore1;
    playerBg1.classList.toggle(`player--active`);
    playerBg0.classList.toggle(`player--active`);
    if (currScore1 >= 100) {
      alert(`Player 2 Wins! With a score of ${currScore1}`);
      newGame();
    }
  }

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
});

btnNew.addEventListener(`click`, newGame);
