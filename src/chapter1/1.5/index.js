// 1.5 One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character and replace a character. 
// Given two strings, write a function to check if they are within one edit of each other.

module.exports = function(origin, changed) {
  if (Math.abs(origin.length - changed.length) > 1) {
    return false;
  }

  // Get the max length.
  var length = origin.length > changed.length
    ? origin.length : changed.length;

  // Convert to arrays.
  origin = origin.split('');
  changed = changed.split('');

  for (var i = 0, changes = 0; i < length; i++) {
    // Got enought changes.
    if (changes > 1) return false;

    // All good - continue.
    if (origin[i] === changed[i]) continue;

    // Was a char added?
    if (origin[i] === changed[i+1]) {
      changes++;
      changed.splice(i, 1);
      continue;
    }

    // Was a char removed?
    if (origin[i+1] === changed[i]) {
      changes++;
      origin.splice(i, 1);
      continue;
    }

    // Was a char updated?
    changes++;
  }

  return true;
};
