import {
  getUserNumber,
  registerSolveNumberButtonHandler,
} from './ui.js';
import {
  RandomGenerator,
  simpleRandomGenerator,
} from './randomGenerator.js';
import {
  convertNumToArr, convertStrArrToNumArr, convertStringToNum,
  hasDuplicatedNum,
  hasZero,
} from './utils.js';
import { validateUserNumber } from './validator.js';
import { play } from './play.js';

export function initialize() {
  const randomGenerator = new RandomGenerator(simpleRandomGenerator);

  const computerRandomNumber = randomGenerator.getExcludedRandomNum(123, 987, (data) => {
    const randomNumberArr = convertNumToArr(data);
    return !(hasDuplicatedNum(data) || hasZero(randomNumberArr));
  });

  registerSolveNumberButtonHandler((e) => {
    e.preventDefault();
    const userInput = getUserNumber();
    const userNumber = convertStringToNum(userInput);
    if (!validateUserNumber(userNumber)) {
      alert('잘못된 값입니다.');
      return;
    }
    const computerRandomNumbers = convertStrArrToNumArr(convertNumToArr(computerRandomNumber));
    console.log(computerRandomNumbers);
    console.log(String(userNumber));
    console.log(play(computerRandomNumbers, String(userNumber)));
  });
}

initialize();
