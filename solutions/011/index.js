function pigIt(str) {
  return str
    .split(' ')
    .map((text) =>
      text.match(/^[.,:!?]/) ? text : `${text.slice(1)}${text[0]}ay`
    )
    .join(' ');
}

module.exports = pigIt;
