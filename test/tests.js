import { makeStatsString } from './utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    const expected = `You have clicked the character selector 3 times, the environment selector 8 times, and the opponent selector 12 times. Your champion fought hard!`;

    const actual = makeStatsString(3, 8, 12);

    expect.equal(actual, expected);
});