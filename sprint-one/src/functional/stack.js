var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;

    return storage;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
    }

    var popped = storage[size];
    storage[size] = undefined;

    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
