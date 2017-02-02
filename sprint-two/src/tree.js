var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};


var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  if (this.value === undefined) {
    this.value = value;
  } else {
    var treeChild = Tree(value);
    this.children.push(treeChild);
  }
};

treeMethods.contains = function(target) {
  var hasTarget = false;
  var tree = this;
  console.log(this);

  var lol = function(tree) {
    if (tree.value === target) {
      hasTarget = true;
    } else {
      if (tree.children.length > 0) {
        for (var i = 0; i < tree.children.length; i++) {
          lol(tree.children[i]);
        }
      }
    }

    lol(tree);
    return hasTarget;
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
