const minInRotatedSortedArray = require('../src/minInRotatedSortedArray');

test('minInRotatedSortedArray returns minimum element', () => {
    expect(minInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    expect(minInRotatedSortedArray([10, 15, 20, 2, 5, 8])).toBe(2);
    expect(minInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(1);
});
