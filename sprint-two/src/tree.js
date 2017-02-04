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
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeChild = Tree(value);
  this.children.push(treeChild);
};

treeMethods.contains = function(target) {
  var hasTarget = false;
  var firstTree = this;

  var searchTree = function(tree) {
    if (tree.value === target) {
      hasTarget = true;
    } else {
      if (tree.children.length > 0) {
        for (var i = 0; i < tree.children.length; i++) {
          searchTree(tree.children[i]);
        }
      }
    }
  };

  searchTree(firstTree);

  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 extend: O(n);
 Tree: O(1); (since inserted value doesn't change the runtime complexity)
 addChild:O(1);
 contains:O(n);
 */
