class Word {
  constructor(word) {
    this.word = word;
  }

  get vowels() {
    return this.count(['a', 'e', 'i', 'o', 'u', 'y']);
  } 

  get consonants() {
    return this.count([
      'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
      'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'
    ]);
  }

  get letters() {
    return this.vowels + this.consonants;
  }

  count(dict) {
    let count = 0;

    // Count letters mach dictionary.
    for (let letter of this.word.toLowerCase()) {
      if (dict.indexOf(letter) !== -1) count++;   
    }

    return count;
  }
}

module.exports = Word;
