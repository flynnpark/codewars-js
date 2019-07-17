function sortArray(array) {
  const odd = array.filter(item => item % 2).sort((a, b) => a - b);
  return array.map(item => (item % 2 ? odd.shift() : item));
}

module.exports = sortArray;
