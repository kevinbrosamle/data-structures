var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = list.tail = new Node(value);
    } else {
      var temp = new Node(value);
      list.tail.next = temp;
      list.tail = temp;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return temp;
  };

  list.contains = function(target, node) {
    if (node === undefined) {
      node = list.head;
    }
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

