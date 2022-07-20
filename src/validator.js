import {
  convertNumToArr,
  hasDuplicatedNum, hasZero, isLengthThree, isNotPositiveInt,
} from './utils.js';

/** 인풋값이 조건에 맞는지 확인하여 불리언 리턴
 * @param {number} userNumber
 * @return {boolean}
 */
export function validateUserNumber(userNumber) {
  const userNumberArr = convertNumToArr(userNumber);
  return !(!isLengthThree(userNumber)
      || hasZero(userNumberArr)
      || isNotPositiveInt(userNumber)
      || hasDuplicatedNum(userNumber));
}
