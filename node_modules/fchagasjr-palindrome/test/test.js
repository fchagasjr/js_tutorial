let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  // Phrase#palindrome
  describe("#palindrome", function () {

    it("should return false for non-palindrome", function () {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for plain palindrome", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for mixed-case palindrome", function () {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for palindrome punctuation", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    describe("#letters", function () {
      it("should return only letters", function () {
        let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
        assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
      });
      it("should return an empty string for no letters", function() {
        let noLetters =  new Phrase("12 45 ... {}")
        assert.strictEqual(noLetters.letters(), "");
      });
    });

  });
});
