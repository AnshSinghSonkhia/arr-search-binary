const floorValue = require('../src/floorValue');

test('floorValue finds the largest element <= target', () => {
    expect(floorValue([1, 2, 3, 4, 8, 10], 5)).toBe(4);
    expect(floorValue([2, 5, 10, 15], 10)).toBe(10);
    expect(floorValue([2, 5, 10, 15], 1)).toBe(-1);
    expect(floorValue([2, 5, 10, 15], 20)).toBe(15);
});
