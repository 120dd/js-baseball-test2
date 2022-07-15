const assert = require('assert');
const { simpleRandomGenerator, RandomGenerator } = require('./randomGenerator');

describe('randomGenerator.js', () => {
  describe('#simpleRandomGenerator(min, max)', () => {
    it('should return integer type', () => {
      const min = 123;
      const max = 987;
      const result = simpleRandomGenerator(min, max);
      assert.ok(Number.isInteger(result) === true);
    });

    it('should return with possibility of having min and max number ', () => {
      const min2 = 2;
      const max2 = 2;
      const result2 = simpleRandomGenerator(min2, max2);
      assert.ok(result2 === 2);
    });
  });

  describe('#getExcludedRandomNum(min, max)', () => {
    const randomGenerator = new RandomGenerator(simpleRandomGenerator);
    it('should return integer type', () => {
      const min = 123;
      const max = 987;
      const result = randomGenerator.getExcludedRandomNum(min, max, () => true);
      assert.ok(Number.isInteger(result) === true);
    });

    it('should return between min and max', () => { // 이 테스트 코드는 오류를 검출하지못하는 경우가 있으므로, 조건을 변경해봤다.
      const min = 1;
      const max = 1;
      const result = randomGenerator.getExcludedRandomNum(min, max, () => true);
      assert.ok(result === 1);
    });
  });
});
