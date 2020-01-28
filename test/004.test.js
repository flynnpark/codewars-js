const isIsogram = require('../solutions/004');

test('004. Isograms', () => {
  expect(isIsogram('Dermatoglyphics')).toBe(true);
  expect(isIsogram('isogram')).toBe(true);
  expect(isIsogram('aba')).toBe(false);
  expect(isIsogram('moOse')).toBe(false);
  expect(isIsogram('isIsogram')).toBe(false);
  expect(isIsogram('')).toBe(true);
});
