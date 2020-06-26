const solution = require('../solutions/007');

test('007. Break camelCase', () => {
  expect(solution('camelCasing')).toBe('camel Casing')
  expect(solution('camelCasingTest')).toBe('camel Casing Test');
});