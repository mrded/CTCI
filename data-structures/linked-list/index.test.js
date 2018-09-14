const LinkedList = require('./index');

describe("Test Linked List", function() {
  var list = new LinkedList();

  list.insert(1);
  list.insert(2);
  list.insert(3);

  it("get head value", function() {
    expect(list.head.data).toBe(1);
  });

  it("get head.next value", function() {
    expect(list.head.next.data).toBe(2);
  });

  it("get head.next.next value", function() {
    expect(list.head.next.next.data).toBe(3);
  });
});
