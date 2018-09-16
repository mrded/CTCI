const Node = require('binary-node');

const _delete = require('./delete.js');

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
    return (!this.left) 
      ? this : this.left.min();
  }

  max() {
    return (!this.right) 
      ? this : this.right.max();
  }


  delete(data) {
    const node = _delete(this, data);

    if (node) {
      this.data = node.data;
      this.left = node.left;
      this.right = node.right;
    }
  }
}

module.exports = BST;
