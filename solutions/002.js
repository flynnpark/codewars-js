/**
 * 먼저 각 라인의 첫 번째 숫자를 살펴볼 경우 1, 3, 7, 13, 21로 (n-1)^2 + n => n(n - 1) + 1 형태로 진행되는 것을 알 수 있음
 * 따라서 각 라인의 합은 (n(n - 1) + 1) + (n(n - 1) + 3) + ... (n(n - 1) + 2n - 1)이므로
 * (n-1)n^2 + 1 + 3 + 5 + ... + (2n - 1) = n^3 - n^2 + n^2 = n^3이 된다.
 */

function rowSumOddNumbers(n) {
  return n ** 3;
}

module.exports = rowSumOddNumbers;
