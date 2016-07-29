

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keys = {};
  // {'2' : {k: v, k2: v2}, '5': [key2, v2]}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._keys[index] !== undefined && this._keys[index][0] !== k) {
    for (var i in this._keys) {
      if (this._keys[i][0] === k) {
        index = i;
      }
    }
  }
  // now we can be sure that we know the index of v in _storage.
  // if the index is empty or has the same key, overwrite
  if ((this._storage.get(index) === undefined) || (this._keys[index][0] === k)) {
    this._storage.set(index, v);
    this._keys[index] = [k, v];
  } else {
    // there is a collision.  Double the limit,
    //generate new indices for each key, and redistribute the hashTable.
    this._storage.storage = [];
    this._limit *= 2;
    var temp = {};
    for (i in this._keys) {
      var newIndex = getIndexBelowMaxForKey(k, this._limit);
      var val = this._keys[i][1];
      var theKey = this._keys[i][0];
      this._storage.set(newIndex, val);
      temp[newIndex] = [theKey, val];
    }

    
  } 
  // if the index is filled and it is a different key - this is a collision.  handle it.
  // double the size of hashtable (_limit) and redistribute keys.
  // Redistributing keys:
  // We need to recreate 'k' and 'v'.
  // iterate through _ keys and for each, 'i' = index, _keys[i] = 'k', 'v' = this._storage.get('i')






  // else {
  //   for (var i = 0; i < this._limit; i++) {
  //     if (this._keys[i] === undefined) {
  //       this._keys[i] = k;
  //       this._storage.set(i, v);
  //       break;
  //     }
  //   }
  // }
  
  console.log(this._keys);
  //console.log(this._storage.retrieve(index))

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, i, collection) {
    if (i === index) {
      delete collection[i];
    }
  });
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// {John Smith: 532-2342, Lisa Smith: 234-2234 .... Sandra Dee: 743-3453}

// {John Smith: 0, Lisa: 1 ... Sandra: 4}
// [532-2342, 234-2234 .... 743-3453]
//     0         1              4
