var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var Tree = function(value) {
  var newTree = {};
  extend(newTree, treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = {};
  newTree.parent = {};
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var parent = this;
  var parentName = this.value;
  var treeChild = Tree(value);
  var childValue = treeChild.value;

  treeChild.parent[parentName] = parent;
  parent.children[childValue] = treeChild;
};


treeMethods.removeFromParent = function(child) {
  var parent = this;

  child.parent = undefined;
  parent.children[child] = undefined;
};

treeMethods.contains = function(target) {
  var hasTarget = false;
  var firstTree = this;

  var searchTree = function(tree) {
    if (tree.value === target) {
      hasTarget = true;
    } else {
      for (var child in tree.children) {
        if (tree.children.hasOwnProperty(child)) {
          searchTree(tree.children[child]);
        }
      }
    }
  };

  searchTree(firstTree);

  return hasTarget;
};


treeMethods.traverse = function(cb) {
  var tree = this;

  var findValues = function(tree) {
    if (tree.value) {
      cb(tree.value);
    }

    for (var key in tree.children) {
      if (tree.children.hasOwnProperty(key)) {
        findValues(tree.children[key]);
      }
    }
  };

  findValues(tree);
};


/*
 * Complexity: What is the time complexity of the above functions?
 extend: O(n);
 Tree: O(1); (since inserted value doesn't change the runtime complexity)
 addChild:O(1);
 removeFromParent: O(1);
 contains:O(n);
 traverse: O(n);
 */
