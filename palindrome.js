// Reverses a string.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function blank() {
  return !!this.match(/^\s*$/);
}

Array.prototype.last = function last() {
  let last_index = this.length - 1
  return this[last_index]
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function processor(string) {
    return string.toLowerCase()
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
