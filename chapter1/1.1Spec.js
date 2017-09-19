describe("Chapter 1.1", function() {
  var solution = require('./1.1');

  it("empty string should return false", function() {
    expect(solution('')).toBe(false);
  });

  it("a string with unique characters should return true", function() {
    expect(solution('qwertyuiop')).toBe(true);
  });

  it("A string with a duplicating character should return false", function() {
    expect(solution('qqwertyuiop')).toBe(false);
  });
});
