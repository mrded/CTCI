// Write a method to replace all spaces in a string with ‘%20’.
// You may assume that the string has sufficient space at the end of the string
// to hold the additional characters, and that you are given the “true” length of the string.

module.exports = function(text) {
  text = text.split('');

  for (var i in text) {
    var current = text[i];
    var next = text.hasOwnProperty(parseInt(i) + 1)
     ? text[parseInt(i) + 1] : ' ';
    
    if (current === ' ') {
      if (next === ' ') {
        delete text[i];
      }
      else {
        text[i] = '%20';
      }
    }
  }

  return text.join('');
};
