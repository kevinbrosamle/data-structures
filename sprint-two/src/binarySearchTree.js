var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
  //Object.create(this.prototype);
};

BinarySearchTree.prototype.insert = function(val) {
  var node = BinarySearchTree(val);
  // this.left === null -> only if val is less than this.value
  // this.right === null -> only if val is less than this.value

  if (val > this.value) {
    if (this.right === null) {
      this.right = node;
      return;
    }
    this.right.insert(val);
  } else {
    if (this.left === null) {
      this.left = node;
      return;
    }
    this.left.insert(val);
  }
};
BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (target < this.value) {
    //go left
    if (this.left === null) {
      return false;
    }
    return this.left.contains(target);
  } else {
    // go right
    if (this.right === null) {
      return false;
    }
    return this.right.contains(target);
  }
};
BinarySearchTree.prototype.depthFirstLog = function() {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
