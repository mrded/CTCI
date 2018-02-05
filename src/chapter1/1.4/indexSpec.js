describe("Chapter 1.4", function() {
  var solution = require('./index');

  it("'Tact Coa' must return true", function() {
    expect(solution('Tact Coa')).toBe(true);
  });

  it("'Tactcoa' must return true", function() {
    expect(solution('Tactcoa')).toBe(true);
  });

  it("'Cact Coa' must return false", function() {
    expect(solution('Cact Coa')).toBe(false);
  });

  it("'Tact Co' must return false", function() {
    expect(solution('Tact Co')).toBe(false);
  });
});
