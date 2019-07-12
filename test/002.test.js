const rowSumOddNumbers = require('../solutions/002');

test('Day 002. Sum of odd numbers', () => {
  expect(rowSumOddNumbers(1)).toBe(1);
  expect(rowSumOddNumbers(42)).toBe(74088);
});
