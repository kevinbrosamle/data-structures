var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.count = 0;
  return obj;
};

var stackMethods = {
  size: function() { return this.count; },
  push: function(value) {
    this[this.size()] = value;
    this.count++;
  },
  pop: function() {
    var temp = this[this.size() - 1];
    delete this[this.size() - 1];
    this.count--;
    if (this.size() < 0) {
      this.count = 0;
    }
    return temp;
  }
};


