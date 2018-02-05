// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// #44: hash table
// #117: bit vector
// #132: O(N log N)

module.exports = function(text) {
  if (text.length === 0) {
    return false;
  }

  var hash = {};

  for (var i in text) {
    var character = text[i];

    if (hash.hasOwnProperty(character)) {
      return false;
    }
    else {
      hash[character] = true;
    }
  }

  return true;
};
