describe("Chapter 1.3", function() {
  var solution = require('./index');
  
  it("replace all spaces in a string with ‘%20’", function() {
    expect(solution('Mr John Smith            ')).toBe("Mr%20John%20Smith");
  });
});
