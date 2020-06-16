var poem =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = poem.split(' ');

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

var count = 0;

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + ' seconds remaining';
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

startBtn.onclick = countdown;
