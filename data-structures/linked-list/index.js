module.exports = class LinkedList {
  constructor(data) {
    this.head = null; 
  }

  _insert(node, data) {
    if (!node.next) {
      node.next = {
        data: data,
        next: null
      }; 
    }
    else {
      this._insert(node.next, data);
    }
  }

  insert(data) {
    if (!this.head) {
      this.head = { data: data, next: null };
    }
    else {
      this._insert(this.head, data);
    }
  }
}
