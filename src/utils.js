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