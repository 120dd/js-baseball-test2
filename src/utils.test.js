const assert = require('assert');
const { hasDuplicatedNum, convertNumToArr} = require('./utils');

describe('utils.js', function () {
    describe('#hasDuplicatedNum(num)', function () {
        it('should return true when num is duplicated', function () {
            assert.ok(hasDuplicatedNum(111) === true);
            assert.ok(hasDuplicatedNum(1111) === true);
        });

        it('should return false when num is not duplicated', function () {
            assert.ok(hasDuplicatedNum(123) === false);
            assert.ok(hasDuplicatedNum(1234) === false);
        });
    });

    describe('#convertNumToArr(num)', function () {
        it('should return numeric string array', function () {
            const result = convertNumToArr(12);
            assert.ok(result[0] === '1');
            assert.ok(result[1] === '2');

            const result2 = convertNumToArr(11);
            assert.ok(result2[0] === '1');
            assert.ok(result2[1] === '1');
        });
    });
});