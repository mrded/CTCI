/**
 * A priority queue is an abstract data type which is like a regular queue or stack data structure,
 * but where additionally each element has a "priority" associated with it.
 *
 * In a priority queue, an element with high priority is served before an element with low priority.
 * If two elements have the same priority, they are served according to their order in the queue.
 **/

module.exports = class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  insert(data) {
    this.queue.push(data);

    this.queue = this.queue.sort(function(a, b) {
      return a - b;
    });
  }

  extract_minimum() {
    return this.queue.shift();
  }

  extract_maximum() {
    return this.queue.pop();
  }
}
