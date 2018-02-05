describe("Chapter 1.6", function() {
  var solution = require('./index');

  it('aabcccccaaa -> a2b1c5a3', function() {
    expect(solution('aabcccccaaa')).toBe('a2b1c5a3'); 
  });

  it('aabcccCCAAAa -> a2b1c3C25A3a1', function() {
    expect(solution('aabcccCCAAAa')).toBe('a2b1c3C25A3a1'); 
  });

  it('qwerty -> qwerty', function() {
    expect(solution('qwerty')).toBe('qwerty'); 
  });
});
