const Node = require('../index.js');

module.exports = function() {
  describe('search', () => {
    let node = new Node(12);
    //     12
    //    /  \
    //   5    20
    //  /\    /\
    // 2  6  15  22

    const values = [5, 20, 2, 6, 15, 22];
    values.map(node.insert.bind(node));

    it('should be able to find all elements', () => {
      for (let value of values) {
        expect(node.find(value).data).toBe(value);
      }
    });

    it('should not be able to find an element which doesn\'t exist', () => {
      expect(node.find(24)).toBe(null);
    })
  });
}
