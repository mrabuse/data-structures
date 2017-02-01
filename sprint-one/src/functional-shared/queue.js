var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};


var Queue = function() {
  var queue = {
    length: 0,
    lastIndex: 0,
    firstIndex: 0,
    storage: {}
  };

  extend (queue, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return queue;
};


var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.length++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
  return value;
};

queueMethods.dequeue = function () {
  if (this.length > 0) {
    this.length--;
  }
  var dequeued = this.storage[this.firstIndex];
  this.storage[this.firstIndex] = undefined;
  this.firstIndex++;
  return dequeued;
};

queueMethods.size = function () {
  return this.length;
};
