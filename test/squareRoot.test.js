const squareRoot = require('../src/squareRoot');

test('squareRoot calculates the square root with precision', () => {
    expect(squareRoot(25)).toBeCloseTo(5.000000, 6);
    expect(squareRoot(50, 4)).toBeCloseTo(7.071, 4);
});
