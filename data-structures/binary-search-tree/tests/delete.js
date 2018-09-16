const Node = require('../index.js');

const values = [12, 5, 20, 2, 6, 15, 22, 1, 16];
//       12
//      /  \
//     5    20
//    /\    /\
//   2  6  15  22
//  /        \
// 1          16

function validate(node, min, max) {
  if (node === null) return true;

  return (node.data > min) && (node.data < max)
    && validate(node.left, min, node.data)
    && validate(node.right, node.data, max);
}

function deleteSpec(node, data) {
  // console.log('before', node);
  node.delete(data);

  // Requested item must be deleted.
  expect(node.find(data)).toBe(null);

  // Other items should still be there.
  for (let value of values.filter(x => x !== data)) {
    expect(node.find(value).data).toBe(value);
  }

  expect(validate(node, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(true);
}

module.exports = function() {
  describe('delete', () => {
    let node;

    beforeEach(() => {
      node = new Node(12);

      values.map(node.insert.bind(node));
    });

    it('a node without children', () => deleteSpec(node, 16));

    it('a node one child', () => deleteSpec(node, 15));

    it('a node two children', () => deleteSpec(node, 20));

    it('root', () => deleteSpec(node, node.data));

    for (let value of values) {
      it(value, () => deleteSpec(node, value));
    }
  });
}
