function titleCase(title, minorWords) {
  const seperatedTitle = title.split(' ');
  const seperatedMinorWords = minorWords && minorWords.toLowerCase().split(' ');
  const newSeperatedTitle = seperatedTitle.map((text, index) => {
    const lowerText = text.toLowerCase();
    if (
      index !== 0 &&
      seperatedMinorWords &&
      seperatedMinorWords.includes(lowerText)
    ) {
      return lowerText;
    }
    return `${lowerText.charAt(0).toUpperCase()}${lowerText.slice(1)}`;
  });
  return newSeperatedTitle.join(' ');
}

module.exports = titleCase;
