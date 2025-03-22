const findMountainPeak = require('../src/findMountainPeak');

test('findMountainPeak finds the peak index in a mountain array', () => {
    expect(findMountainPeak([1, 3, 8, 12, 4, 2])).toBe(3);
    expect(findMountainPeak([0, 2, 4, 8, 10, 3, 1])).toBe(4);
});
