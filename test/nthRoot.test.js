const nthRoot = require('../src/nthRoot');

test('nthRoot calculates nth root of a number', () => {
    expect(nthRoot(27, 3)).toBeCloseTo(3.000000, 6);
    expect(nthRoot(16, 4)).toBeCloseTo(2.000000, 6);
});
