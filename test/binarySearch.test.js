const binarySearch = require('../src/binarySearch');

test('binarySearch finds the correct index', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([10, 20, 30, 40, 50], 10)).toBe(0);
    expect(binarySearch([10, 20, 30, 40, 50], 50)).toBe(4);
    expect(binarySearch([10, 20, 30, 40, 50], 25)).toBe(-1);
});
