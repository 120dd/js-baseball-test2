/** min~max 범위의 중복되지 않고, 0이 포함되지 않은 숫자의 랜덤값을 만들어 리턴한다
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
import {convertNumToArr, hasDuplicatedNum, hasZero} from "./utils";

export function getRandomNumber(min, max) {
    let randomNumber;
    let randomNumberArr;
    do {
        // randomNumber = MissionUtils.Random.pickNumberInRange(min, max);
        randomNumber = getRandomArbitrary(min,max);
        console.log(randomNumber);
        randomNumberArr = convertNumToArr(randomNumber);
    } while (hasDuplicatedNum(randomNumber) || hasZero(randomNumberArr));
    return randomNumber;
}

//테스트용 임시 함수
function getRandomArbitrary(min, max) {
    const result = Math.random() * (max - min) + min;
    return Math.floor(result);
}