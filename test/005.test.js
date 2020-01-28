const solution = require('../solutions/005');

test('005. String ends with?', () => {
  expect(solution('samurai', 'ai').toBe(true));
  expect(solution('sumo', 'omo').toBe(false));
  expect(solution('ninja', 'ja').toBe(true));
  expect(solution('sensei', 'i').toBe(true));
  expect(solution('samurai', 'ra').toBe(false));
  expect(solution('abc', 'abcd').toBe(false));
  expect(solution('abc', 'abc').toBe(true));
  expect(solution('abcabc', 'bc').toBe(true));
  expect(solution('ails', 'fails').toBe(false));
  expect(solution('fails', 'ails').toBe(true));
  expect(solution('this', 'fails').toBe(false));
  expect(solution('abc', '').toBe(true));
  expect(solution(':-)', ':-(').toBe(false));
  expect(solution('!@#$%^&*() :-)', ':-)').toBe(true));
});
