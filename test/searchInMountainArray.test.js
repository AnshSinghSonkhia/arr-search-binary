const searchInMountainArray = require('../src/searchInMountainArray');

test('searchInMountainArray finds the correct index', () => {
    expect(searchInMountainArray([1, 2, 4, 8, 10, 3, 1], 10)).toBe(4);
    expect(searchInMountainArray([1, 3, 8, 12, 4, 2], 2)).toBe(5);
    expect(searchInMountainArray([1, 3, 8, 12, 4, 2], 7)).toBe(-1);
});
