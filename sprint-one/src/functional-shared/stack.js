var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.length = 0;

  extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  pop: function () {

    if (this.length > 0) {
      this.length--;
    }
    var popped = this.storage[this.length];

    this.storage[this.length] = undefined;
    return popped;
  },

  push: function (value) {
    this.storage[this.length] = value;
    this.length++;
    return value;
  },

  size: function () {
    return this.length;
  }
};

var stack = Stack();
