

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
  //
};

HashTable.prototype.redistribute = function(halveOrDouble) {
  // copy this._storage to oldStorage
  var oldStorage = [];
  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i) !== undefined) {
      var bucket = this._storage.get(i);
      for (var j = 0; j < bucket.length; j++) {
        oldStorage.push(bucket[j]);
      }
    } 
  }
  // create a new _storage with the new limit
  if (halveOrDouble === 'double') {
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    this._count = 0;
  } else if (halveOrDouble === 'halve') {
    this._limit *= .5;
    this._storage = LimitedArray(this._limit);
    this._count = 0;
  }

  // repopulate this._storage with the new indexes.
  for (i = 0; i < oldStorage.length; i++) {
    this.insert(oldStorage[i][0], oldStorage[i][1]);
  }
};

HashTable.prototype.insert = function(k, v) {
  this._count++;
  if (this._count > (.75 * this._limit)) {
    this.redistribute('double');
  }
  
  var bucket;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    bucket = this._storage.get(index);
    var keyInBucket = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        keyInBucket = true;
      }
    }
    if (!keyInBucket) {
      bucket.push([k, v]);  
    }
    this._storage.set(index, bucket);
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  this._count--;
  if (this._count < (.25 * this._limit)) {
    this.redistribute('halve');
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  if (bucket.length === 0) {
    this._storage.set(index, undefined);
  } else {
    this._storage.set(index, bucket);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */