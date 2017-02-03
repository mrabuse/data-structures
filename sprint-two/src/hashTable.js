

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storedArray = this._storage.get(index);
  var findEmptySpot = function (array) {
    if (array[2][0] === undefined) {
      array[2] = [k, v, []];
    } else {
      findEmptySpot(array[2][0]);
    }
  };

  if (storedArray === undefined) {
    return this._storage.set(index, [k, v, []]);
  } else {
    return findEmptySpot(storedArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storedValues = this._storage.get(index);
  var findKey = function (array) {
    if (array[0] === k) {
      return array[1];
    } else {
      findKey(array[2]);
    }
  };

  return findKey(storedValues);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
