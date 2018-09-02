const Word = require('./word');

describe('Word', () => {

  it('Jeffery Lebowski', () => {
    const word = new Word('Jeffery Lebowski');

    expect(word.countVowels()).toBe(6);
    expect(word.countConsonants()).toBe(9);
    expect(word.countLetters()).toBe(15);
  });
  
  it('Walter Sobchak', () => {
    const word = new Word('Walter Sobchak');

    expect(word.countVowels()).toBe(4);
    expect(word.countConsonants()).toBe(9);
    expect(word.countLetters()).toBe(13);
  });

  it('Theodore Donald Kerabatsos', () => {
    const word = new Word('Theodore Donald Kerabatsos');

    expect(word.countVowels()).toBe(10);
    expect(word.countConsonants()).toBe(14);
    expect(word.countLetters()).toBe(24);
  });

  it('Peter Gibbons', () => {
    const word = new Word('Peter Gibbons');

    expect(word.countVowels()).toBe(4);
    expect(word.countConsonants()).toBe(8);
    expect(word.countLetters()).toBe(12);
  });

  it('Michael Bolton', () => {
    const word = new Word('Michael Bolton');

    expect(word.countVowels()).toBe(5);
    expect(word.countConsonants()).toBe(8);
    expect(word.countLetters()).toBe(13);
  });

  it('Samir Nagheenanajar', () => {
    const word = new Word('Samir Nagheenanajar');

    expect(word.countVowels()).toBe(8);
    expect(word.countConsonants()).toBe(10);
    expect(word.countLetters()).toBe(18);
  });
  
  it('Half & Half', () => {
    const word = new Word('Half & Half');

    expect(word.countVowels()).toBe(2);
    expect(word.countConsonants()).toBe(6);
    expect(word.countLetters()).toBe(8);
  });

  it('Colt M1911A1', () => {
    const word = new Word('Colt M1911A1');

    expect(word.countVowels()).toBe(2);
    expect(word.countConsonants()).toBe(4);
    expect(word.countLetters()).toBe(6);
  });

  it('16lb bowling ball', () => {
    const word = new Word('16lb bowling ball');

    expect(word.countVowels()).toBe(3);
    expect(word.countConsonants()).toBe(10);
    expect(word.countLetters()).toBe(13);
  });

  it('Red Swingline Stapler', () => {
    const word = new Word('Red Swingline Stapler');

    expect(word.countVowels()).toBe(6);
    expect(word.countConsonants()).toBe(13);
    expect(word.countLetters()).toBe(19);
  });

  it('Printer paper', () => {
    const word = new Word('Printer paper');

    expect(word.countVowels()).toBe(4);
    expect(word.countConsonants()).toBe(8);
    expect(word.countLetters()).toBe(12);
  });

  it('Vibe Magazine Subscriptions - 40 pack', () => {
    const word = new Word('Vibe Magazine Subscriptions - 40 pack');

    expect(word.countVowels()).toBe(11);
    expect(word.countConsonants()).toBe(18);
    expect(word.countLetters()).toBe(29);
  });
});
