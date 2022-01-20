'use strict';

const CheckBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20);
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let initialScore = 20;
let score = document.querySelector('.score');
const againBtn = document.querySelector('.again');
let initialHighScore = 0;
let highScore = document.querySelector('.highscore');




CheckBtn.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  
  if(!guess) {
    message.textContent = 'No number';
  } else if(guess !== secretNumber) {
      if (initialScore > 1) {
        message.textContent = guess > secretNumber ? 'Too high' : 'Too low';
        initialScore--;
        score.textContent = initialScore;
      } else {
        message.textContent = 'You lost';
        score.textContent = 0;
        document.body.style.backgroundColor = 'red';
      }
  } else if(guess === secretNumber) {
      message.textContent = `You're right`;
      number.textContent = secretNumber;
      
      if(initialScore > initialHighScore) {
        initialHighScore = initialScore;
        highScore.textContent = initialHighScore;
      }
      if(initialScore === 20) {
        score.textContent = 20;
      } else {
        initialScore++;
        score.textContent = initialScore;
      }
        
    document.body.style.backgroundColor = '#69b347';
  }
});

againBtn.addEventListener('click', function() {
  let guess = document.querySelector('.guess');
  
  number.textContent = '?';
  guess.value = '';
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  initialScore = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  
  document.body.style.backgroundColor = '#222';
});