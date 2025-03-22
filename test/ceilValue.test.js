const ceilValue = require('../src/ceilValue');

test('ceilValue finds the smallest element >= target', () => {
    expect(ceilValue([1, 2, 3, 4, 8, 10], 5)).toBe(8);
    expect(ceilValue([2, 5, 10, 15], 10)).toBe(10);
    expect(ceilValue([2, 5, 10, 15], 1)).toBe(2);
    expect(ceilValue([2, 5, 10, 15], 20)).toBe(-1);
});
