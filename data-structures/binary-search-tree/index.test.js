const Node = require('./index.js');

describe("Binary search tree", () => {
  it('new', () => {
    const node = new Node(42);

    expect(node.data).toBe(42);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  describe('insert', () => {
    let node;

    describe('child', () => {
      beforeEach(() => {
        node = new Node(5);
      });

      it('left', () => {
        node.insert(5);

        expect(node.left).toBe(null);
        expect(node.right).toBe(null);
      });

      it('left', () => {
        node.insert(4);

        expect(node.left.data).toBe(4);
        expect(node.right).toBe(null);
      });

      it('right', () => {
        node.insert(6);

        expect(node.right.data).toBe(6);
        expect(node.left).toBe(null);
      });
    
    });

    describe('grand child', () => {
      beforeEach(() => {
        node = new Node(5);
        node.insert(4);
        node.insert(6);
      });

      it('left', () => {
        node.insert(7);
        expect(node.right.right.data).toBe(7);
        expect(node.right.left).toBe(null);

        expect(node.left.left).toBe(null);
        expect(node.left.right).toBe(null);
      });

      it('right', () => {
        node.insert(3);
        expect(node.left.left.data).toBe(3);
        expect(node.left.right).toBe(null);

        expect(node.right.left).toBe(null);
        expect(node.right.right).toBe(null);
      });
    });
  });
});
