var Tree = function(value) {
  var newTree = {};
  jQuery.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var temp = new Tree(value);
  this.children.push(temp);
  temp.parent = this;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length === 0) {
    return false;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  //this === the node we want to remove
  var parentsChildren = this.parent.children;

  for (var i = 0; i < parentsChildren.length; i++) {
    if (parentsChildren[i].value === this.value) {
      parentsChildren.splice(i, 1);
      break;
    }
  }
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  // iterate through children
  for (var i = 0; i < this.children.length; i++) {
    // callback on each child
    cb(this.children[i]);
    // travere each child
    this.children[i].traverse(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
