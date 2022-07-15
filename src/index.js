import {
  RandomGenerator,
  simpleRandomGenerator,
} from './randomGenerator.js';
import { convertNumToArr, hasDuplicatedNum, hasZero } from './utils.js';

const randomGenerator = new RandomGenerator(simpleRandomGenerator);

const computerRandomNumber = randomGenerator.getExcludedRandomNum(123, 987, (data) => {
  const randomNumberArr = convertNumToArr(data);
  return !(hasDuplicatedNum(data) || hasZero(randomNumberArr));
});
