import {
  getUserNumber,
  registerSolveNumberButtonHandler
} from './ui.js';
import {
  RandomGenerator,
  simpleRandomGenerator
} from './randomGenerator';
import {
  convertNumToArr,
  hasDuplicatedNum,
  hasZero
} from './utils';

function initialize() {
  const randomGenerator = new RandomGenerator(simpleRandomGenerator);

  const computerRandomNumber = randomGenerator.getExcludedRandomNum(123, 987, (data) => {
    const randomNumberArr = convertNumToArr(data);
    return !(hasDuplicatedNum(data) || hasZero(randomNumberArr));
  });

  registerSolveNumberButtonHandler(() => {
    const userNumber = getUserNumber();
    console.log(userNumber);
  });
}

initialize();
