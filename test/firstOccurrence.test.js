const firstOccurrence = require('../src/firstOccurrence');

test('firstOccurrence finds the first index of target', () => {
    expect(firstOccurrence([1, 2, 2, 2, 3], 2)).toBe(1);
    expect(firstOccurrence([5, 5, 5, 10], 5)).toBe(0);
    expect(firstOccurrence([1, 3, 3, 5, 5], 4)).toBe(-1);
});
