const lastOccurrence = require('../src/lastOccurrence');

test('lastOccurrence finds the last index of target', () => {
    expect(lastOccurrence([1, 2, 2, 2, 3], 2)).toBe(3);
    expect(lastOccurrence([5, 5, 5, 10], 5)).toBe(2);
    expect(lastOccurrence([1, 3, 3, 5, 5], 4)).toBe(-1);
});
