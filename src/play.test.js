const assert = require('assert');
const {
  play, checkStrikeAndBall, checkStrike, playResultHandler,
} = require('./play');

describe('play.js', () => {
  describe('#play(computerInputNumbers, userInputString)', () => {
    it('중복값이 없을 경우 낫싱을 반환한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputString = '987';
      const result = play(computerInputNumbers, userInputString);
      assert.ok(result === '낫싱');
    });

    it('스트라이크만 있을 경우 개수 + 스트라이크를 반환한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputString = '126';
      const result = play(computerInputNumbers, userInputString);
      assert.ok(result === '2 스트라이크');
    });

    it('볼 있을 경우 개수 + 볼을 반환한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputString = '312';
      const result = play(computerInputNumbers, userInputString);
      assert.ok(result === '3 볼');
    });

    it('볼과 스트라이크가 같이 있을 경우 볼 + 스트라이크를 개수와 함께 반환한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputString = '152';
      const result = play(computerInputNumbers, userInputString);
      assert.ok(result === '1볼 1스트라이크');
    });

    it('두 인풋이 같을 경우 축하 메세지를 반환한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputString = '123';
      const result = play(computerInputNumbers, userInputString);
      assert.ok(result === '축하합니다');
    });
  });

  describe('#playResultHandler(strikeAndBallCount, strikeCount)', () => {
    it('스트라이크와 볼이 합이 0 일때 낫싱을 반환', () => {
      const result = playResultHandler(0, 0);
      assert.ok(result === '낫싱');
    });

    it('스트라이크만 있을 경우 개수 + 스트라이크를 반환한다', () => {
      const result = playResultHandler(2, 2);
      assert.ok(result === '2 스트라이크');
    });

    it('볼만 있을 경우 개수 + 볼을 반환한다', () => {
      const result = playResultHandler(2, 0);
      assert.ok(result === '2 볼');
    });

    it('볼과 스트라이크가 같이 있을 경우 볼 + 스트라이크를 개수와 함께 반환한다', () => {
      const result = playResultHandler(2, 1);
      assert.ok(result === '1볼 1스트라이크');
    });

    it('두 인풋이 같을 경우 축하 메세지를 반환한다', () => {
      const result = playResultHandler(3, 3);
      assert.ok(result === '축하합니다');
    });
  });

  describe('#checkStrikeAndBall(computerInputNumbers, userInputNumbers)', () => {
    it('중복값이 3개일 경우 3을 반환해야한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputNumbers = [1, 2, 3];
      const result = checkStrikeAndBall(computerInputNumbers, userInputNumbers);
      assert.ok(result === 3);
    });

    it('중복값이 2개일 경우 2를 반환해야한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputNumbers = [1, 2, 8];
      const result = checkStrikeAndBall(computerInputNumbers, userInputNumbers);
      assert.ok(result === 2);
    });

    it('중복값이 없을 경우 0을 반환해야한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputNumbers = [4, 5, 6];
      const result = checkStrikeAndBall(computerInputNumbers, userInputNumbers);
      assert.ok(result === 0);
    });
  });

  describe('#checkStrike(computerInputNumbers, userInputNumbers)', () => {
    it('중복값이 3개일 경우 3을 반환해야한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputNumbers = [1, 2, 3];
      const result = checkStrike(computerInputNumbers, userInputNumbers);
      assert.ok(result === 3);
    });

    it('중복값이 2개일 경우 2를 반환해야한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputNumbers = [1, 2, 8];
      const result = checkStrike(computerInputNumbers, userInputNumbers);
      assert.ok(result === 2);
    });

    it('중복값이 없을 경우 0을 반환해야한다', () => {
      const computerInputNumbers = [1, 2, 3];
      const userInputNumbers = [4, 5, 6];
      const result = checkStrike(computerInputNumbers, userInputNumbers);
      assert.ok(result === 0);
    });
  });
});
