const Node = require('../index.js');

const values = [12, 5, 20, 2, 6, 15, 22, 1, 16];
//       12
//      /  \
//     5    20
//    /\    /\
//   2  6  15  22
//  /        \
// 1          16

function deleteSpec(node, data) {
  // console.log('before', node);
  node.delete(data);

  // Requested item must be deleted.
  expect(node.find(data)).toBe(null);

  // Other items should still be there.
  for (let value of values.filter(x => x !== data)) {
    expect(node.find(value).data).toBe(value);
  }

  expect(validateSpec(node)).toBe(true);
}

function validateSpec(node) {
  if (!node.right && !node.left) {
    return true;
  }

  // One child.
  else if (!node.left && node.right && (node.data < node.right.data)) {
    return validateSpec(node.right);
  }
  else if (!node.right && node.left && (node.data > node.left.data)) {
    return validateSpec(node.left);
  }

  // Two children.
  else if ((node.data < node.right.data) && (node.data > node.left.data)) {
    return validateSpec(node.right) && validateSpec(node.left);
  }

  return false;
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
