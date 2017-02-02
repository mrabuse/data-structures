

// Instantiate a new graph
var Graph = function() {
  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {};
  this.graph[node].value = node;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var hasNode = false;
  if (this.graph[node]) {
    hasNode = true;
  }

  return hasNode;
};

Graph.prototype.removeNode = function(node) {
  for (var key in this.graph[node]) {
    if (key !== 'value') {
      this.graph[key][node] = undefined;
    }
  }
  this.graph[node] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasEdge = false;

  if (this.graph[fromNode][toNode]) {
    hasEdge = true;
  }

  return hasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode][toNode] = this.graph[toNode];
  this.graph[toNode][fromNode] = this.graph[fromNode];

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.graph[fromNode][toNode] = undefined;
  this.graph[toNode][fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(1)
 removeNode: O(n)
 addEdge: O(1)
 hasEdge: O(1)
 removeEdge: O(1)
 forEachNode: O(n)
 */
