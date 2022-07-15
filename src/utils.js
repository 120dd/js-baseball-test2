/** number 타입의 인풋을 string 배열로 변경
 *
 * @param {number} num
 * @return {Array<string>}
 */
export function convertNumToArr(num) {
  const stringedNum = String(num);
  return [...stringedNum];
}

/** string type 값을 받아서 number type 으로 변경
 * @param {string} str
 * @return {number}
 */
export function convertStringToNum(str) {
  return Number(str);
}

/** 인풋에 중복된 숫자가있는지 확인한다
 *
 * @param {number} num
 * @return {boolean}
 */
export function hasDuplicatedNum(num) {
  const numArr = convertNumToArr(num);
  const numSet = new Set();
  numArr.forEach((data) => {
    numSet.add(data);
  });
  return numSet.size !== numArr.length;
}

/** Array<string> 타입의 인풋에 '0'이 포함되는지 확인
 * @param {Array<string>} inputArr
 * @return {boolean}
 */
export function hasZero(inputArr) {
  return inputArr.includes('0');
}

/** input 이 양의 정수인지 확인
 * @param input
 * @return {boolean}
 */
export function isNotPositiveInt(input) {
  if (!Number.isInteger(input)) {
    return true;
  }
  return Math.sign(input) !== 1;
}

/** input 의 길이가 3인지 확인
 * @param {number} input
 * @return {boolean}
 */
export function isLengthThree(input) {
  const inputLength = input.toString().length;
  return inputLength === 3;
}
