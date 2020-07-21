const dirReduc = require('../solutions/009');

test('9. Directions Reduction', () => {
  expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toStrictEqual(['WEST']);
  expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toStrictEqual(['NORTH', 'WEST', 'SOUTH', 'EAST']);
  expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toStrictEqual([]);
});
