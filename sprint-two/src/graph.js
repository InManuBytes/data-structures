// pseudoclassical style

// Instantiate a new graph
var Graph = function() {
  //add stuff that only graphs have
  // graphs have nodes
  // each node has an unordered pair - edges
  // Graph = {node1: [edge1, edge2,...], node2: [edge1, edge2, ..]}
  // Store nodes and edges in arrays so we can use indexes to store and access
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  // whenever we add a node we just add it as a key and assign its value to be an empty array
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(N)
  // check if the node exists in the nodes array
  // use javascript native function -> returns a boolean
  return this.nodes.includes(node);
  // if it does return true, else false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //O(N) -> nodes => polynomial wrt edges
  // declare a node index variable to keep track
  var nodeIdx = this.nodes.indexOf(node);
  // find out which index the node locates in the array
  // checking if that node exists in the array
  if (nodeIdx > -1) {
    this.nodes.splice(nodeIdx,1)
  }
  // remove edges later
  debugger;
  for (let i = 0; i < this.edges.length; i++) { // O(N^2)
    if (this.edges[i].includes(node)) {
      this.edges.splice(i,1); // O(N)
      i--;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(N)
  var isFound = false;
  for (let i =0; i < this.edges.length;i++) {
    // check if the array at index 0 and index 1
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
      isFound = true;
    }
  }
  return isFound;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //O(1)
  // test case : input is 3,4 but they run the remove node method is reverse because undirected
  this.edges.push([fromNode,toNode],[toNode,fromNode]);
  // this.edges = [[fromNode,toNode],[toNode,fromNode]] -> nested arrays
  // allows us to access edges from both directions
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //O(N^2)
  for (let i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === fromNode && this.edges[i][1] === toNode)||(this.edges[i][0] === toNode && this.edges[i][1] === fromNode)) {
      this.edges.splice(i,1);
      debugger
      i--; // because we took an element out
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // at least linear
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// polynomial -> worst case for removing a node and edges, otherwise linear




