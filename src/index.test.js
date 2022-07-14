const assert = require('assert');
const { getRandomNumber } = require('./index');
const {hasDuplicatedNum} = require("./utils");

describe('index.js', function () {
    describe('#getRandomNumber(min, max)', function () {
        it('should return between min and max', function () {
            const min = 123;
            const max = 987;
            const result = getRandomNumber(min, max);

            assert.ok(result >= min && result <= max);
        });
        it('should return number', function () {
            const result = getRandomNumber(156, 856);
            assert.ok(typeof result === 'number');
        });
        it('should return none duplicate', function () {
            const result = getRandomNumber(156, 856);
            console.log(result);
            assert.ok(hasDuplicatedNum(result) === false);
        });
    });
});