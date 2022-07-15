const assert = require('assert');
const { getRandomNumber, getExcludedRandomNum } = require('./index');
const {
  hasDuplicatedNum, hasZero, convertNumToArr, excludeFilter,
} = require('./utils');

describe('index.js', () => {
  describe('#getRandomNumber(min, max)', () => {
    it('should return between min and max', () => {
      const min = 123;
      const max = 987;
      const result = getRandomNumber(min, max);

      assert.ok(result >= min && result <= max);
    });

    it('should return number', () => {
      const result = getRandomNumber(156, 856);
      assert.ok(typeof result === 'number');
    });

    it('should return none duplicate', () => {
      const result = getRandomNumber(156, 856);
      assert.ok(hasDuplicatedNum(result) === false);
    });

    // 어떻게 항상 같은 결과를 나타내야하는가?
    it('should return without zero', () => {
      const result = getRandomNumber(156, 856);
      const resultArr = convertNumToArr(result);
      assert.ok(hasZero(resultArr) === false);
    });
  });

  describe('#getExcludedRandomNum(min, max, excludeFilter)', () => {
    const min = 123;
    const max = 987;

    it('should return between min and max', () => {
      const result = getExcludedRandomNum(min, max, () => false);
      assert.ok(result >= min && result <= max);
    });

    // it('should return number type', function () {
    // });

    // it('중복 숫자를 제거하는 필터를 적용했을때, 중복 숫자가 나오지 않는다.', function () {
    //    const result = getExcludedRandomNum(119, 120, (gen) => hasDuplicatedNum(gen));
    //    assert.ok(result === 120);
    // });

    // it('0을 제거하는 필터를 적용했을때, 0이 나오지 않는다.', function () {
    // });
  });

  // describe('#excludeFilter(unfilteredNumber)', function () {
  //    it('should return between min and max', function () {
  //        const result = excludeFilter()
  //    });
  //
  //    it('should return number type', function () {
  //    });
  //
  //    it('중복 숫자를 제거하는 필터를 적용했을때, 중복 숫자가 나오지 않는다.', function () {
  //    });
  //
  //    it('0을 제거하는 필터를 적용했을때, 0이 포함된 숫자가 나오지 않는다.', function () {
  //    });
  // });
});
