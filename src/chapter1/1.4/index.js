// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

module.exports = function(text) {
  var chars = [];

  // Remove spaces
  text = text.replace(/ /, '');

  // Convert to lower case
  text = text.toLowerCase();

  for (var i in text) {
    // Collect unique chars.
    var char = text[i];
    var charIndex = chars.indexOf(char);

    if (charIndex === -1) {
      chars.push(char); 
    }
    else {
      chars.splice(charIndex, 1);
    }
  }

  return chars.length === 1 || chars.length === 0;
};
