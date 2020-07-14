function solution(list) {
  list.sort((a, b) => a - b);
  let result = '';
  let isRange = false;
  for (let i = 0; i < list.length; ++i) {
    if (list[i + 1] !== list[i] + 1) {
      if (isRange) {
        result += list[i] === list[i - 2] + 2 ? '-' : ',';
      }
      result += list[i] + ',';
      isRange = false;
    } else if (!isRange) {
      result += list[i];
      isRange = true;
    }
  }
  return result.slice(0, -1);
}

module.exports = solution;
