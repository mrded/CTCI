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

  find(data) {
    if (data === this.data) {
      return this;
    }
    else if (data > this.data && this.right) {
      return this.right.find(data);
    }
    else if (data < this.data && this.left) {
      return this.left.find(data);
    }
  
    return null;
  } 

  min() {
    return (this.left === null) 
      ? this : this.left.min();
  }

  max() {
    return (this.right === null) 
      ? this : this.right.max();
  }
}

module.exports = BST;
