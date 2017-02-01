var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(Stack.prototype);
  stack.index = 0;
  stack.length = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.index] = value;
  this.index++;

  return value;
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    this.length--;
    this.index--;
  }
  var popped = this.storage[this.index];

  this.storage[this.index] = undefined;

  return popped;
};

Stack.prototype.size = function() {
  return this.length;
};


var stack = Stack();
