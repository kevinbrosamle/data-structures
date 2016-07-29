var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var temp = new Node(value);
    temp.next = this.head;
    this.head = temp;
  };

  list.addToTail = function(value) {
    var temp;
    if (this.tail === null) {
      temp = new Node(value);
      this.head = temp;
      this.tail = temp;
    } else {
      temp = new Node(value);
      this.tail.next = temp;
      temp.parent = this.tail;
      this.tail = temp;
    }
  };

  list.removeHead = function() {
    var temp = this.head.value;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.parent = null;
    }
    return temp;
  };

  list.removeTail = function() {
    var temp = this.tail;
    this.tail = temp.parent;
    temp.parent.next = null;
    return temp;
  };

  list.contains = function(target, node) {
    node = node || this.head;
    
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return this.contains(target, node.next);

  };
  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.parent = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

