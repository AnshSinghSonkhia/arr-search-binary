const searchInRotatedSortedArray = require('../src/searchInRotatedSortedArray');

test('searchInRotatedSortedArray finds the correct index', () => {
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    expect(searchInRotatedSortedArray([1], 1)).toBe(0);
});
