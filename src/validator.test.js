const assert = require('assert');
const { validateUserNumber } = require('./validator');

describe('validator.js', () => {
  describe('#validateUserNumber(userNumber)', () => {
    it('중복되는 숫자가 있을 경우 false 를 반환해야함', () => {
      assert.ok(validateUserNumber(111) === false);
    });

    it('양의 정수 123은 true 를 반환해야함', () => {
      assert.ok(validateUserNumber(123) === true);
    });

    it('string 은 true 를 반환해야함', () => {
      assert.ok(validateUserNumber('123') === false);
    });

    it('string 은 true 를 반환해야함', () => {
      assert.ok(validateUserNumber(1234) === false);
    });
  });
});
