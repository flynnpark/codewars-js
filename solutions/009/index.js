const OPPOSITE = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  WEST: 'EAST',
  EAST: 'WEST',
};

function dirReduc(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result && result[result.length - 1] === OPPOSITE[arr[i]]) {
      result.pop()
    } else {
      result.push(arr[i])
    }
  }
  return result
}

module.exports = dirReduc;
