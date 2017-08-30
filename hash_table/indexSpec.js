describe("Test Hash Table module", function() {
  var HashTable = require('./index');

  var h = new HashTable({one: 1, two: 2, three: 3, "i'm no 4": 4});

  it("original length", function() {
    expect(h.length).toBe(4);
  });

  it("value of key 'one'", function() {
    expect(h.getItem('one')).toBe(1);
  });

  it("Doesn't have key 'foo'?", function() {
    expect(h.hasItem('foo')).toBe(false);
  });
  
  it("previous value of key 'foo'", function() {
    expect(h.setItem('foo', 'bar')).toBe(undefined);

    it("length after setItem", function() {
      expect(h.length).toBe(5);
    });

    it("value of key 'foo'", function() {
      expect(h.getItem('foo')).toBe('bar');
    });
  });

  it('value of key "i\'m no 4"', function() {
    expect(h.getItem("i'm no 4")).toBe(4);
  });
  
  it("length after clear", function() {
    h.clear();
    expect(h.length).toBe(0);
  });
});
