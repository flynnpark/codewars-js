const pigIt = require('../solutions/011');

test('11. Simple Pig Latin', () => {
  expect(pigIt('Pig latin is cool')).toStrictEqual('igPay atinlay siay oolcay');
  expect(pigIt('This is my string')).toStrictEqual('hisTay siay ymay tringsay');
});
