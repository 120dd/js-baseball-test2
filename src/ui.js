const solveNumberButton = document.querySelector('#submit');
const userNumberInputEl = document.querySelector('#user-input');
const resultText = document.querySelector('#result');
const restartButton = document.querySelector('#game-restart-button');
const restartArticle = document.querySelector('#game-restart-article');

export function registerSolveNumberButtonHandler(fn) {
  solveNumberButton.onclick = fn;
}

export function getUserNumber() {
  return userNumberInputEl.value;
}

export function changeResult(content) {
  resultText.innerHTML = content;
}

export function showRestart() {
  if (resultText.innerHTML === '<strong>🎉정답을 맞추셨습니다🎉</strong>') {
    restartArticle.style.display = 'block';
  }
}

export function registerRestartButtonHandler(fn) {
  restartButton.onclick = fn;
  restartArticle.style.display = 'none';
  userNumberInputEl.value = '';
}
