function _delete(node, data) {
  // 0. find a node
  if (data < node.data) {
    node.left = _delete(node.left, data);
  }
  else if (data > node.data) {
    node.right = _delete(node.right, data);
  }
  else if (data === node.data) {
    // 1. no children - delete relation
    if (!node.left && !node.right) {
      node = null;
    }

    // 2. one child - move relation to a child
    else if (node.left && !node.right) {
      node = node.left;
    }
    else if (!node.left && node.right) {
      node = node.right;
    }

    // 3. two children - (left.max || right.min) is root
    else {
      // Two options: 
      //  - find max value from the left and move it to node.data
      //  - find min value from the right and move it to node.data
      const min = node.right.min();

      node.data = min.data;
      node.right = _delete(node.right, min.data);
    }
  }

  return node;
};

module.exports = _delete;
