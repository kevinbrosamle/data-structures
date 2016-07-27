var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size - 1] = value;
    
  };

  someInstance.pop = function() {
    if (size - 1 < 0) {
      size = 0;
    } else {
      delete storage[size];
      size--;
      return storage[size];
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
