var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = 1;
  } else {
    this._storage[item]++;
  }

};

setPrototype.contains = function(item) {
  var hasItem = false;
  if (this._storage[item]) {
    hasItem = true;
  }
  return hasItem;
};

setPrototype.remove = function(item) {
  if (this._storage[item] === 1) {
    this._storage[item] = undefined;
  } else {
    this._storage[item]--;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1)
 contains: O(1)
 remove: O(1)
 */
