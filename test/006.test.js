const isPangram = require('../solutions/006')

test('006. Detect Pangram', () => {
  const cases = [
    // Not pangrams
    [
      "This is not a pangram.",
      "This isn't a pangram!",
      "abcdefghijklmopqrstuvwxyz ",
      "aaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Detect Pangram",
      "A pangram is a sentence that contains every single letter of the alphabet at least once."
    ],
    // Pangrams
    [
      "The quick brown fox jumps over the lazy dog.",
      "Cwm fjord bank glyphs vext quiz",
      "Pack my box with five dozen liquor jugs.",
      "How quickly daft jumping zebras vex.",
      "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ",
      "AbCdEfGhIjKlM zYxWvUtSrQpOn"
    ]
  ]
  for (const sentence of cases[0]) {
    expect(isPangram(sentence)).toBe(false);
  }
  for (const sentence of cases[1]) {
    expect(isPangram(sentence)).toBe(true);
  }
})