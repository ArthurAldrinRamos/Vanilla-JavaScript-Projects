'use strict';
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 26;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 11;
// console.log(document.querySelector(`.guess`).value);

const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector(`.number`).textContent = secretNumber;

let score = 20;


document.querySelector(`.check`).addEventListener(`click`, () => {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess);

    if(!guess) {
        if (score > 0){
            document.querySelector(`.message`).textContent = `No number!`
            score--
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = `You Lose!`
        }

    } else if(guess === secretNumber){

        if(score < 30){
        document.querySelector(`.message`).textContent = `You are correct!`;
        score++;
        document.querySelector(`.score`).textContent = score;
        } else {
        document.querySelector(`.message`).textContent = `You Won!`
        }
    } else if(guess > secretNumber) {

        if (score > 0){
        document.querySelector(`.message`).textContent = `Too high!`
        score--
        document.querySelector(`.score`).textContent = score;
        } else {
        document.querySelector(`.message`).textContent = `You Lose!`
        }

    } else if(guess < secretNumber) {

        if (score > 0){
        document.querySelector(`.message`).textContent = `Too low!`
        score--
        document.querySelector(`.score`).textContent = score;
        } else {
        document.querySelector(`.message`).textContent = `You Lose!`
        }
    }
        
})

