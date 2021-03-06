const assert = require('assert');
const {
  hasDuplicatedNum, convertNumToArr, hasZero, convertStringToNum, isNotPositiveInt, isLengthThree,
  convertStrArrToNumArr, convertStringToNumberArray,
} = require('./utils');

describe('utils.js', () => {
  describe('#convertStrArrToNumArr(strArr)', () => {
    it('should return numberArray', () => {
      const result = convertStrArrToNumArr(['1', '2', '3']);
      assert.ok(typeof result[0] === 'number');
    });

    it('should return false when num is not duplicated', () => {
      assert.ok(hasDuplicatedNum(123) === false);
      assert.ok(hasDuplicatedNum(1234) === false);
    });
  });

  describe('#hasDuplicatedNum(num)', () => {
    it('should return true when num is duplicated', () => {
      assert.ok(hasDuplicatedNum(111) === true);
      assert.ok(hasDuplicatedNum(1111) === true);
    });

    it('should return false when num is not duplicated', () => {
      assert.ok(hasDuplicatedNum(123) === false);
      assert.ok(hasDuplicatedNum(1234) === false);
    });
  });

  describe('#convertNumToArr(num)', () => {
    it('should return numeric string array', () => {
      const result = convertNumToArr(12);
      assert.ok(result[0] === '1');
      assert.ok(result[1] === '2');

      const result2 = convertNumToArr(11);
      assert.ok(result2[0] === '1');
      assert.ok(result2[1] === '1');
    });
  });

  describe('#hasZero(num)', () => {
    it('should return without zero', () => {
      const result = hasZero(['1', '3', '9']);
      assert.ok(result === false);

      const result2 = hasZero(['2', '0', '3']);
      assert.ok(result2 === true);
    });
  });

  describe('#converStringToNum(str)', () => {
    it('should return number type', () => {
      const result = convertStringToNum('123');
      assert.ok(typeof result === 'number');
    });

    it('should return same data with converted type', () => {
      const result = convertStringToNum('123');
      assert.ok(result === 123);
    });
  });

  describe('#isNotPositiveInt(input)', () => {
    it('????????? ?????? ????????? ??? false ??? ???????????????', () => {
      const result = isNotPositiveInt(123);
      assert.ok(result === false);
    });

    it('????????? ????????? string ??? ??? true ??? ???????????????', () => {
      const result = isNotPositiveInt('123');
      assert.ok(result === true);
    });

    it('????????? ????????? ??? true ??? ???????????????', () => {
      const result = isNotPositiveInt(-123);
      assert.ok(result === true);
    });
  });

  describe('#isLengthThree(input)', () => {
    it('????????? ????????? 3 ????????? ???????????? true ??? ???????????????', () => {
      const result = isLengthThree(123);
      assert.ok(result === true);
    });

    it('????????? ????????? 2 ?????? ???????????? false ??? ???????????????', () => {
      const result = isLengthThree(12);
      assert.ok(result === false);
    });

    it('????????? ????????? 4 ?????? ???????????? false ??? ???????????????', () => {
      const result = isLengthThree(1234);
      assert.ok(result === false);
    });
  });

  describe('#convertStringToNumberArray(stringTypeNum)', () => {
    it('should return [number] type', () => {
      assert.ok(typeof convertStringToNumberArray('123')[0] === 'number');
    });
  });
});
