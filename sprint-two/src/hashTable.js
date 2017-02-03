

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//Value tuple: array[0] = key, array[1] = value,
//array[2] = array link to key:value pairs w/ matching hash

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storedArray = this._storage.get(index);

  var findEmptySpot = function (array) {
    if (array[2].length === 0) {
      array[2] = [k, v, []];
    } else if (array[0] === k) {
      array[1] = v;
    } else {
      findEmptySpot(array[2][0]);
    }
  };

  if (storedArray === undefined) {
    this._storage.set(index, [k, v, []]);
  } else if (storedArray[0] === k) {
    storedArray[1] = v;
  } else {
    findEmptySpot(storedArray);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storedValues = this._storage.get(index);

  var findKey = function (array) {
    if (array[0] === k) {
      return array[1];
    } else {
      if (array[2].length === 0) {
        return undefined;
      } else {
        return findKey(array[2]);
      }
    }
  };

  if (storedValues === undefined) {
    return undefined;
  } else {
    return findKey(storedValues);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storedValues = this._storage.set(index, undefined);

  var annihilateK = function (array) {
    if (array[0] === k) {
      if (array[2].length === 0) {
        array = undefined;
      } else {
        array = array[2];
      }
    } else if (array[2].length === 0) {
      return;
    } else {
      annihilateK(array[2]);
    }
  };

  if (storedValues === undefined) {
    return;
  } else {
    annihilateK(storedValues);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(n)
 remove: O(n)
 retrieve: O(n)
 */
