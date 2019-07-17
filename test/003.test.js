const sortArray = require('../solutions/003');

test('Day 003. Sort the odd', () => {
  expect(sortArray([5, 3, 2, 8, 1, 4])).toStrictEqual([1, 3, 2, 8, 5, 4]);
  expect(sortArray([5, 3, 1, 8, 0])).toStrictEqual([1, 3, 5, 8, 0]);
  expect(sortArray([])).toStrictEqual([]);
});
