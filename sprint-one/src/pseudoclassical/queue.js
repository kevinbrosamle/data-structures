var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
};

Queue.prototype.size = function() {
  return this.count;
};
Queue.prototype.enqueue = function(value) {
  this[this.size()] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  var temp = this[0];
  delete this[0];
  for (var i = 0; i < this.size(); i++) {
    this[i] = this[i + 1];
  }
  delete this[this.size() - 1];
  this.count--;
  if (this.size() < 0) {
    this.count = 0;
  }
  return temp;
};


