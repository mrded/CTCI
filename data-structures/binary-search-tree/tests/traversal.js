const Node = require('../index.js');

const values = [5, 3, 8, 2, 4, 6, 9, 1, 7];
//       5
//      /  \
//     3    8
//    /\    /\
//   2  4  6  9
//  /       \
// 1         7
const node = new Node(5);
values.map(node.insert.bind(node));
  
module.exports = function() {
  describe('traversal', () => {
    it('pre order', () => {
      expect(node.traversalPreOrder()).toEqual([5, 3, 2, 1, 4, 8, 6, 7, 9]);
    });

    it('in order', () => {
      expect(node.traversalInOrder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('post order', () => {
      expect(node.traversalPostOrder()).toEqual([1, 2, 4, 3, 7, 6, 9, 8, 5]);
    });

    it('level order', () => {
      expect(node.traversalLevelOrder()).toEqual([5, 3, 8, 2, 4, 6, 9, 1, 7]);
    });
  });
}
