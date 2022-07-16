import { convertStringToNumberArray } from './utils.js';

/** 인풋을 비교하여 중복되는 값의 개수(볼)을 반환함
 * @param {[number]} computerInputNumbers
 * @param {[number]} userInputNumbers
 * @return {number}
 */
export function checkStrikeAndBall(computerInputNumbers, userInputNumbers) {
  let ballStrikeCount = 0;
  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers.includes(userInputNumbers[i])) {
      ballStrikeCount += 1;
    }
  }
  return ballStrikeCount;
}

/** 두 인풋 배열 간 인덱스와 값이 일치하는(스트라이크) 개수를 반환
 * @param computerInputNumbers
 * @param userInputNumbers
 */
export function checkStrike(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;
  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikeCount += 1;
    }
  }
  return strikeCount;
}

/** 카운터들을 받아서 결과값을 반환
 * @param {number} strikeAndBallCount
 * @param {number} strikeCount
 * @return {string}
 */
export function playResultHandler(strikeAndBallCount, strikeCount) {
  const ballCount = strikeAndBallCount - strikeCount;
  if (strikeAndBallCount === 0) {
    return '낫싱';
  }
  if (strikeCount === 0) {
    return `${ballCount} 볼`;
  }
  if (ballCount === 0 && strikeCount !== 3) {
    return `${strikeCount} 스트라이크`;
  }
  if (strikeCount === 3) {
    return '축하합니다';
  }
  return `${ballCount}볼 ${strikeCount}스트라이크`;
}

/** 인풋을 비교하여 결과값을 반환
 * @param {Array<number>} computerInputNumbers
 * @param {string} userInputString
 * @return {string}
 */
export function play(computerInputNumbers, userInputString) {
  const userInputNumbers = convertStringToNumberArray(userInputString);
  const strikeAndBallCount = checkStrikeAndBall(computerInputNumbers, userInputNumbers);
  const strikeCount = checkStrike(computerInputNumbers, userInputNumbers);
  return playResultHandler(strikeAndBallCount, strikeCount);
}
