

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //
};

HashTable.prototype.insert = function(k, v) {
  //[[k,v][k2,v2]] -> bucket
  var bucket;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    bucket = this._storage.get(index);
    //[['bat', 'echo']] -> tuple inside bucket
    // k = 'bat'
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
  // var index = getIndexBelowMaxForKey(k, this._limit);
  // return this._storage.get(index);
  var index = getIndexBelowMaxForKey(k, this._limit);
  // [[k1, v1], [k2, v2]];
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// {John Smith: 532-2342, Lisa Smith: 234-2234 .... Sandra Dee: 743-3453}

// {John Smith: 0, Lisa: 1 ... Sandra: 4}
// [532-2342, 234-2234 .... 743-3453]
//     0         1              4
