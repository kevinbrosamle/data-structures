var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {count: 0};
  jQuery.extend(obj, queueMethods);
  return obj;

};

var queueMethods = {
  size: function() {
    return this.count;
  },
  enqueue: function(value) {
    this[this.size] = value;
    this.count++;
  },
  dequeue: function() {}
};


