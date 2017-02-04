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
  var previousTree;
  var leftNodes = [];
  var rightNodes = [];
  var level = 0;

  var eachOne = function (tree) {
    if (tree.left !== undefined) {
      if (tree.left.looked === undefined) {
        leftNodes[level].push({previousLevel: tree, looked: true});
        cb(tree.left.value);
        eachOne(tree.left);
      } else {
        if (tree.right !== undefined) {
          if (tree.right.looked === undefined) {
            rightNodes[level].push({previousLevel: tree, looked: true});
          }
        } else if (tree.right === undefined) {
          eachOne(tree.previousLevel);
        }
      }
    }
  };

  cb(tree.value);
  return eachOne(tree);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
