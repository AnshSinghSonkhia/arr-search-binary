const findRotationIndex = require('../src/findRotationIndex');

test('findRotationIndex returns correct index', () => {
    expect(findRotationIndex([4, 5, 6, 7, 0, 1, 2])).toBe(4);
    expect(findRotationIndex([10, 15, 20, 2, 5, 8])).toBe(3);
    expect(findRotationIndex([1, 2, 3, 4, 5])).toBe(0);
});
