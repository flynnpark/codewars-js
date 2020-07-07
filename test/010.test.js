const domainName = require('../solutions/010');

test('009. Directions Reduction', () => {
  expect(domainName('http://google.com')).toStrictEqual('google');
  expect(domainName('http://google.co.jp')).toStrictEqual('google');
  expect(domainName('www.xakep.ru')).toStrictEqual('xakep');
  expect(domainName('https://youtube.com')).toStrictEqual('youtube');
});
