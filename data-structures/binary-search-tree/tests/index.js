const Node = require('../index.js');

const insertSpec = require('./insert');

describe("Binary search tree", () => {
  it('new', () => {
    const node = new Node(42);

    expect(node.data).toBe(42);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  insertSpec();
});
