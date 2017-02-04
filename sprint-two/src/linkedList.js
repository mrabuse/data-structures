var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
    }

    if (list.tail) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }

    list.tail = newNode;
  };

  list.addToHead = function (value) {
    var newNode = Node(value);

    if (list.tail === null) {
      list.tail = newNode;
    }

    if (list.head) {
      list.head.previous = newNode;
      newNode.next = list.head;
    }

    list.head = newNode;
  };

  list.removeHead = function() {
    var removed = list.head;

    list.head = removed.next;

    return removed.value;
  };

  list.removeTail = function() {
    var removed = list.tail;

    list.tail = removed.previous;

    return removed.value;
  };

  list.contains = function(target) {
    var hasTarget = false;

    var checkList = function(node) {

      if (node.value === target) {
        hasTarget = true;
      } else {
        if (node.next) {
          checkList(node.next);
        }
      }
    };

    checkList(list.head);

    return hasTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addToTail: O(1)
 addToHead: O(1)
 removeHead: O(1)
 removeTail: O(1)
 contains: O(n)
 */
