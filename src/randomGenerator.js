/** 미션용 라이브러리를 사용하지 않고 범위내의 랜덤 숫자를 반환
 * @param min
 * @param max
 * @return {number}
 */
export function simpleRandomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 미션용 라이브러리를 사용하여 범위내의 랜덤 숫자를 반환
 * @param min
 * @param max
 * @return {any}
 */
export function missionUtilGenerator(min, max) {
  return MissionUtils.Random.pickNumberInRange(min, max);
}

/** 주어진 함수에 따른 랜덤값을 생성하기위한 클래스
 * @param {function} generatorFn
 */
export class RandomGenerator {
  constructor(generatorFn) {
    this.generatorFn = generatorFn;
  }

  /** 필터가 참이면 범위에 맞는 랜덤값을 생성
   * @param min
   * @param max
   * @param excludeFilter
   * @return {number}
   */
  getExcludedRandomNum(min, max, excludeFilter) {
    let randomNumber;
    do {
      randomNumber = this.generatorFn(min, max);
    } while (!excludeFilter(randomNumber));
    return randomNumber;
  }
}
