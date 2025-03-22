const minInSortedRotatedDuplicates = require('../src/minInSortedRotatedDuplicates');

test('minInSortedRotatedDuplicates finds minimum with duplicates', () => {
    expect(minInSortedRotatedDuplicates([3, 3, 1, 3, 3, 3, 3])).toBe(1);
    expect(minInSortedRotatedDuplicates([10, 1, 10, 10, 10, 10])).toBe(1);
});
