const { WordAnagram } = require("../word-anagram");

describe("WordAnagram Test", () => {
  const word = "cat";
  const wordAnagram = new WordAnagram(word);

  test("should have 6 total permutations", () => {
    expect(wordAnagram.getTotalPermutations()).toEqual(6);
  });

  test("should return valid words permutations for cat", () => {
    expect(wordAnagram.getAllAnagrams()).toEqual([
      "cat",
      "cta",
      "atc",
      "act",
      "tca",
      "tac",
    ]);
    // ['c', 'a', 't']
  });
});
