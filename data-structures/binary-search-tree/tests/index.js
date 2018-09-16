const Node = require('../index.js');

const insertSpec = require('./insert');
const searchSpec = require('./search');
const deleteSpec = require('./delete');
const minMaxSpec = require('./min-max');
const traversalSpec = require('./traversal');

const heightSpec = require('./height');

describe("Binary search tree", () => {
  it('new', () => {
    const node = new Node(42);

    expect(node.data).toBe(42);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  insertSpec();
  searchSpec();
  deleteSpec();
  minMaxSpec();
  traversalSpec();
  heightSpec();
});
