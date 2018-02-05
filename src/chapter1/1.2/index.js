// Check Permissions: Given two strings, write a method to decide if one is a permutation of the other.
//
// In other words, one of the first string's permutations is the substring of the second string.
//
// Permission of a string has length! variants.
//
// #1: hash tables
// #84: O(N log N) time || O(N) time and more space
// #122: hash table
// #131: sort strings 

var sort = function(text) {
  // @TODO: Possible refactor sort.
  return text.split('').sort().join('');
};

module.exports = function(one, two) {
  if (one === two) {
    return true;
  }

  if (one.length !== two.length) {
    return false;
  }
  
  if (one.length === 0 || two.length === 0) {
    return false;
  }

  if (sort(one) === sort(two)) {
    return true; 
  }

  return false;
};
