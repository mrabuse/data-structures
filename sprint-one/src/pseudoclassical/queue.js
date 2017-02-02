var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function (value) {
  this.length++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;

  return value;
};

Queue.prototype.dequeue = function () {
  if (this.length > 0) {
    this.length--;
  }
  var dequeued = this.storage[this.firstIndex];

  this.storage[this.firstIndex] = undefined;
  this.firstIndex++;

  return dequeued;
};

Queue.prototype.size = function () {
  return this.length;
};

var queue = new Queue();
