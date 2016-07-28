var Tree = function(value) {
  var newTree = {};
  newTree.head = null;
  jQuery.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var temp = new Tree(value);
  if (this.head === null) {
    this.head = temp;
  }
  this.children.push(temp);
};

treeMethods.contains = function(target, node) {

  if (node === undefined) {
    node = this.head;
    if (node.value === target) {
      return true;
    }
  }

  for (var i = 0; i < node.children.length; i++) {
    if (node.children[i].value === target) {
      return true;
    }
    if (node.children.length === 0) {
      return false;
    } else {
      return this.contains(target, node.children[i]);
    }
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
