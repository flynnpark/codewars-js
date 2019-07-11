const validatePIN = require('../solutions/001');

test('Day 001. Regex validate PIN code', () => {
  expect(validatePIN('1')).toBe(false);
  expect(validatePIN('12')).toBe(false);
  expect(validatePIN('123')).toBe(false);
  expect(validatePIN('1234')).toBe(true);
  expect(validatePIN('12345')).toBe(false);
  expect(validatePIN('123456')).toBe(true);
  expect(validatePIN('a123')).toBe(false);
  expect(validatePIN('a12345')).toBe(false);
  expect(validatePIN('abcd')).toBe(false);
  expect(validatePIN('abcdef')).toBe(false);
});
