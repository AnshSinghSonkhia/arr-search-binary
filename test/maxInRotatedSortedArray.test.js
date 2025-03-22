const maxInRotatedSortedArray = require('../src/maxInRotatedSortedArray');

test('maxInRotatedSortedArray returns maximum element', () => {
    expect(maxInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2])).toBe(7);
    expect(maxInRotatedSortedArray([10, 15, 20, 2, 5, 8])).toBe(20);
    expect(maxInRotatedSortedArray([1, 2, 3, 4, 5])).toBe(5);
});
