const Word = require('./word');

describe('Word', () => {
  it('Jeffery Lebowski', () => {
    const word = new Word('Jeffery Lebowski');

    expect(word.vowels).toBe(6);
    expect(word.consonants).toBe(9);
    expect(word.letters).toBe(15);
  });
  
  it('Walter Sobchak', () => {
    const word = new Word('Walter Sobchak');

    expect(word.vowels).toBe(4);
    expect(word.consonants).toBe(9);
    expect(word.letters).toBe(13);
  });

  it('Theodore Donald Kerabatsos', () => {
    const word = new Word('Theodore Donald Kerabatsos');

    expect(word.vowels).toBe(10);
    expect(word.consonants).toBe(14);
    expect(word.letters).toBe(24);
  });

  it('Peter Gibbons', () => {
    const word = new Word('Peter Gibbons');

    expect(word.vowels).toBe(4);
    expect(word.consonants).toBe(8);
    expect(word.letters).toBe(12);
  });

  it('Michael Bolton', () => {
    const word = new Word('Michael Bolton');

    expect(word.vowels).toBe(5);
    expect(word.consonants).toBe(8);
    expect(word.letters).toBe(13);
  });

  it('Samir Nagheenanajar', () => {
    const word = new Word('Samir Nagheenanajar');

    expect(word.vowels).toBe(8);
    expect(word.consonants).toBe(10);
    expect(word.letters).toBe(18);
  });
  
  it('Half & Half', () => {
    const word = new Word('Half & Half');

    expect(word.vowels).toBe(2);
    expect(word.consonants).toBe(6);
    expect(word.letters).toBe(8);
  });

  it('Colt M1911A1', () => {
    const word = new Word('Colt M1911A1');

    expect(word.vowels).toBe(2);
    expect(word.consonants).toBe(4);
    expect(word.letters).toBe(6);
  });

  it('16lb bowling ball', () => {
    const word = new Word('16lb bowling ball');

    expect(word.vowels).toBe(3);
    expect(word.consonants).toBe(10);
    expect(word.letters).toBe(13);
  });

  it('Red Swingline Stapler', () => {
    const word = new Word('Red Swingline Stapler');

    expect(word.vowels).toBe(6);
    expect(word.consonants).toBe(13);
    expect(word.letters).toBe(19);
  });

  it('Printer paper', () => {
    const word = new Word('Printer paper');

    expect(word.vowels).toBe(4);
    expect(word.consonants).toBe(8);
    expect(word.letters).toBe(12);
  });

  it('Vibe Magazine Subscriptions - 40 pack', () => {
    const word = new Word('Vibe Magazine Subscriptions - 40 pack');

    expect(word.vowels).toBe(11);
    expect(word.consonants).toBe(18);
    expect(word.letters).toBe(29);
  });
});
