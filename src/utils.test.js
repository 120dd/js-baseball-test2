const assert = require('assert');
const { hasDuplicatedNum, convertNumToArr, hasZero } = require('./utils');

describe('utils.js', () => {
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
});
