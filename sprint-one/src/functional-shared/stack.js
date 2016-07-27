var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {count: 0};
  jQuery.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) { 
    this[this.count] = value;
    this.count++;
  },
  pop: function() {
    var temp = this[this.count - 1];
    delete this[this.count - 1];
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    return temp;
  },
  size: function() { 
    return this.count; 
  }
};


