'use strict';
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 26;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 11;
// console.log(document.querySelector(`.guess`).value);

// ----------------------------------------------------- //

//Global Variables
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber)
let score = 20;
let highScore = 0;

//Functions used in the click event..
const displayMessage = (message) => {
    document.querySelector(`.message`).textContent = message;
}
const yourScore = () => {
    document.querySelector(`.score`).textContent = score;
}
const yourColor = (color) => {
    document.querySelector(`body`).style.backgroundColor = 
            color;
}
const boxSize = () => {
    document.querySelector(`.number`).style.width = `30rem`;
}

//Click Event
document.querySelector(`.check`).addEventListener(`click`, () => {
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess);

    //When no input or answers zero = LOSE
    if(!guess) {
        if (score > 0){
            displayMessage(`No number!`)
            score--
            yourScore();
            yourColor(`red`);
            boxSize();
        } else {
            displayMessage(`You Lose!`);
        }

    //When player guess is correct = WIN
    } else if(guess === secretNumber){

        displayMessage(`You are correct!`);
        yourColor(`#60b347`);
        boxSize();

        document.querySelector(`.number`).textContent = secretNumber;

        if(score > highScore){
            highScore = score
            document.querySelector(`.highscore`).textContent = highScore
        }
    
    //When player guess is wrong = LOSE
    } else if(guess !== secretNumber) {

        displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
        score--
        yourScore();
        yourColor(`red`);
        boxSize();

        }
        
})

//Again Button - Repeats a round without removing the Highscore
document.querySelector(`.again`).addEventListener(`click`, () =>{

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)

    displayMessage(`Start guessing...!`); 
    yourScore();
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`body`).style.backgroundColor = 
    `#222`;
    document.querySelector(`.guess`).value = ``;
})



