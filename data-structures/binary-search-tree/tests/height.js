const Node = require('../index.js');

const values = [5, 3, 8, 2, 4, 6, 9, 1];
//       5
//      /  \
//     3    8
//    /\    /\
//   2  4  6  9
//  /
// 1
const node = new Node(5);
values.map(node.insert.bind(node));
  
module.exports = function() {
  describe('height', () => {
    it('5', () => {
      expect(node.height()).toEqual(3);
    });
  });
}

