const countOccurrences = require('../src/countOccurrences');

test('countOccurrences returns correct count', () => {
    expect(countOccurrences([1, 2, 2, 2, 3], 2)).toBe(3);
    expect(countOccurrences([5, 5, 5, 10], 5)).toBe(3);
    expect(countOccurrences([1, 3, 3, 5, 5], 4)).toBe(0);
});
