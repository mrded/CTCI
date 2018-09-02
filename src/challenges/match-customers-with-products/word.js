function Word(word) {
  this.word = word;

  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
    'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
  ];

  this.countVowels = () => this.count(vowels);
  this.countConsonants = () => this.count(consonants);
  this.countLetters = () => this.count(vowels.concat(consonants))
}

Word.prototype.count = function(dict) {
  let count = 0;

  // Count letters mach dictionary.
  for (let letter of this.word.toLowerCase()) {
    if (dict.indexOf(letter) !== -1) count++;   
  }

  return count;
}

module.exports = Word;
