describe("Chapter 1.2", function() {
  var solution = require('./index');

  it("if one of argumens is empty should return false", function() {
    expect(solution('', 'foobar')).toBe(false);
    expect(solution('foobar', '')).toBe(false);
  });

  it("if strings are permutations should return true", function() {
    expect(solution("qwerty", "ytrewq")).toBe(true);
    expect(solution("foo", "foo")).toBe(true);
    expect(solution("foo", "ofo")).toBe(true);
    expect(solution("foo", "oof")).toBe(true);
    expect(solution('', '')).toBe(false);
  });

  it("strings with different length should return false", function() {
    expect(solution("foo", "fooo")).toBe(false);
    expect(solution("barr", "bar")).toBe(false);
  });

  it("if strings are not permutations should return false", function() {
    expect(solution("qwerty", "asdfgh")).toBe(false);
    expect(solution("qwerty", "qwertt")).toBe(false);
  });
});
