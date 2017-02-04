var BinarySearchTree = function (value) {
  this.value = value;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  var side;
  var tree = this;

  var findSpot = function (tree) {
    if (tree.value > value) {
      side = 'left';
    }

    if (tree.value < value) {
      side = 'right';
    }

    if (tree[side] === undefined) {
      tree[side] = new BinarySearchTree(value);
    } else {
      findSpot(tree[side]);
    }
  };

  findSpot(tree);
};


BinarySearchTree.prototype.contains = function(value) {
  var hasValue = false;
  var side;
  var tree = this;

  var findValue = function (tree) {

    if (tree.value > value) {
      side = 'left';
    }

    if (tree.value < value) {
      side = 'right';
    }

    if (tree.value === value) {
      hasValue = true;
    } else if (tree[side] === undefined) {
      return;
    } else {
      findValue(tree[side]);
    }
  };

  findValue(tree);
  return hasValue;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var tree = this;

  var eachOne = function (tree) {

    cb(tree.value);

    if (tree.left) {
      eachOne(tree.left);
    }

    if (tree.right) {
      eachOne(tree.right);
    }
  };

  return eachOne(tree);
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log^n)
 contains: O(log^n)
 depthFirstLog: O(n)
 */
