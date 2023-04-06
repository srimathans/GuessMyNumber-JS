'use strict';

let score = 20;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = 1;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
if(!guess) {
    document.querySelector('.message').textContent = 'No Number';
} else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
} else if(guess > secretNumber && score > 1) {
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
} else if (guess < secretNumber && score > 1) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'you lost the game';
    score = 0;
    document.querySelector('.score').textContent = score;
}

});



document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    // secretNumber = Math.trunc(Math.random() * 20) + 1;
    let secretNumber = 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})