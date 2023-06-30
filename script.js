let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 50;
let highscore = 0;

const showMessage = message => {
  document.querySelector('.message').textContent = message;
};

const showNumber = number => {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMessage('👺 Enter a Number');
  } else if (guess === secretNumber) {
    showMessage('Correct Number 🎉');
    showNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.padding = '25px 100px';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess < secretNumber ? '📉 Too Low' : '📈 Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('👎🏼 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 50;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  showNumber('?');
  showMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#151515';
  document.querySelector('.number').style.padding = '25px';
});
