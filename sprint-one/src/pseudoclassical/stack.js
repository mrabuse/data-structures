var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return value;
};

Stack.prototype.pop = function () {
  if (this.length > 0) {
    this.length--;
  }
  var popped = this.storage[this.length];
  this.storage[this.length] = undefined;
  return popped;
};

Stack.prototype.size = function () {
  return this.length;
};
