var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if ((typeof item) === 'object') {
    item = JSON.stringify(item);
  }
  var inSet = false;
  for (var key in this._storage) {
    var temp = this._storage[key];
    if ((typeof temp === 'object')) {
      temp = JSON.stringify(temp);
    }
    if (item === temp) {
      inSet = true;
    }
  }
  return inSet;
};

setPrototype.remove = function(item) {
  for (var key in this._storage) {
    if (item === this._storage[key]) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
