const solveNumberButton = document.querySelector('#submit');
const userNumberInputEl = document.querySelector('#user-input');

export function registerSolveNumberButtonHandler(fn) {
  solveNumberButton.onclick = fn;
}

export function getUserNumber() {
  return userNumberInputEl.value;
}
