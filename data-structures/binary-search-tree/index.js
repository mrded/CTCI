const Node = require('binary-node');

class BST extends Node {
  insert(data) {
    if (data > this.data) {
      if (this.right) {
        this.right.insert(data);
      }
      else {
        this.right = new BST(data);
      }
    }

    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      }
      else {
        this.left = new BST(data);
      }
    }
  }
}

module.exports = BST;
