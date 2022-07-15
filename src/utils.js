/**인풋에 중복된 숫자가있는지 확인한다
 *
 * @param {number} num
 * @return {boolean}
 */
export function hasDuplicatedNum(num) {
    const numArr = convertNumToArr(num);
    const numSet = new Set();
    numArr.forEach((data) => {
        numSet.add(data)
    });
    return numSet.size !== numArr.length;
}

/** number 타입의 인풋을 string 배열로 변경
 *
 * @param {number} num
 * @return {Array<string>}
 */
export function convertNumToArr(num) {
    const stringedNum = String(num);
    return [...stringedNum];
}

/** Array<string> 타입의 인풋에 '0'이 포함되는지 확인
 *
 * @param {Array<string>} inputArr
 * @return {boolean}
 */
export function hasZero(inputArr) {
    return inputArr.includes('0')
}


///** 인풋을 받아 조건에 따라 불리언을 반환
// *
// * @param {number} unfilteredNumber
// * @returns {boolean}
// */
//export function excludeFilter(unfilteredNumber){
//    return true
//}
