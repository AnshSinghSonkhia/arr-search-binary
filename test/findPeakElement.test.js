const findPeakElement = require('../src/findPeakElement');

test('findPeakElement finds a peak index', () => {
    expect(findPeakElement([1, 3, 20, 4, 1, 0])).toBe(2);
    expect(findPeakElement([10, 20, 30, 40, 50])).toBe(4);
    expect(findPeakElement([50, 40, 30, 20, 10])).toBe(0);
});
