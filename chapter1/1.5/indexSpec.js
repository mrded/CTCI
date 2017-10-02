describe("Chapter 1.5", function() {
  var solution = require('./index');

  it('pale, ple -> true', function() {
    expect(solution('pale', 'ple')).toBe(true); 
  });

  it('pale, pales -> true', function() {
    expect(solution('pale', 'pales')).toBe(true);
  });

  it('pales, pale -> true', function() {
    expect(solution('pales', 'pale')).toBe(true); 
  });

  it('pale, bale -> true', function() {
    expect(solution('pale', 'bale')).toBe(true); 
  });

  it('pale, bake -> false', function() {
    expect(solution('pale', 'bake')).toBe(false); 
  });

  it('pale, elap -> false', function() {
    expect(solution('pale', 'elap')).toBe(false); 
  });
});
