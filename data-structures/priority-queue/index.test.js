describe("Test Priority Queue module", function() {
  var PriorityQueue = require('./index');

  it("extract minimum value", function() {
    var queue = new PriorityQueue();

    queue.insert(1);
    queue.insert(3);
    queue.insert(2);

    expect(queue.extract_minimum()).toBe(1);
    expect(queue.extract_minimum()).toBe(2);
    expect(queue.extract_minimum()).toBe(3);
  });

  it("extract maximum value", function() {
    var queue = new PriorityQueue();

    queue.insert(1);
    queue.insert(3);
    queue.insert(2);

    expect(queue.extract_maximum()).toBe(3);
    expect(queue.extract_maximum()).toBe(2);
    expect(queue.extract_maximum()).toBe(1);
  });
});
