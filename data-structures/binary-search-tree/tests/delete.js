const Node = require('../index.js');

module.exports = function() {
  describe('delete', () => {
    let node;
    const values = [5, 20, 2, 6, 15, 22, 1, 16];

    beforeEach(() => {
      node = new Node(12);
      //       12
      //      /  \
      //     5    20
      //    /\    /\
      //   2  6  15  22
      //  /        \
      // 1          16

      values.map(node.insert.bind(node));
    });

    it('a node without children', () => {
      node.delete(1);

      expect(node.find(22)).toBe(null);
    });

    it('a node one child', () => {
      node.delete(15);

      expect(node.find(15)).toBe(null);
    });

    it('a node two children', () => {
      node.delete(20);

      expect(node.find(20)).toBe(null);
    });

    it('root', () => {
      node.delete(node.data);

      expect(node.find(node.data)).toBe(null);
    });
  });
}
