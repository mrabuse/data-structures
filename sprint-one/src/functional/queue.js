var Queue = function() {
  var someInstance = {};
  var newIndex = 0;
  var size = 0;
  var firstIndex = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[newIndex] = value;
    newIndex++;
    return value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[firstIndex];
    storage[firstIndex] = undefined;
    if (size > 0) {
      size--;
      firstIndex++;
    }
    return dequeued;
  };

  someInstance.size = function() {

    return size;
  };

  return someInstance;
};
