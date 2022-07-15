export function simpleRandomGenerator(min, max) {
  const result = Math.random() * (max - min) + min;
  return Math.floor(result);
}

export function missionUtilGenerator(min, max) {
  return MissionUtils.Random.pickNumberInRange(min, max);
}

export class RandomGenerator {
  constructor(generatorFn) {
    this.generatorFn = generatorFn;
  }

  getExcludedRandomNum(min, max, excludeFilter) {
    let randomNumber;

    do {
      randomNumber = this.generatorFn(min, max);
    } while (!excludeFilter(randomNumber));

    return randomNumber;
  }

  getRandomNumber(min, max) {
    let randomNumber;
    let randomNumberArr;
    do {
      // randomNumber = MissionUtils.Random.pickNumberInRange(min, max);
      randomNumber = this.generatorFn(min,max);
      randomNumberArr = convertNumToArr(randomNumber);
    } while (hasDuplicatedNum(randomNumber) || hasZero(randomNumberArr));
    return randomNumber;
  }
}
