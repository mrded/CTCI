const Node = require('./index.js');

describe("Binary node", () => {
  it('new', () => {
    const node = new Node(42);

    expect(node.data).toBe(42);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });
});
