// pseudoclassical style

// Instantiate a new graph
var Graph = function() {
  //add stuff that only graphs have
  // graphs have _nodes
  // each node has an unordered pair - _edges
  // Graph = {node1: [edge1, edge2,...], node2: [edge1, edge2, ..]}
  // Store _nodes and _edges in arrays so we can use indexes to store and access
  this._nodes = [];
  this._edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // O(1)
  // whenever we add a node we just add it as a key and assign its value to be an empty array
  this._nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(N)
  // check if the node exists in the _nodes array
  // use javascript native function -> returns a boolean
  return this._nodes.includes(node);
  // if it does return true, else false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //O(N) -> _nodes => polynomial wrt _edges
  // declare a node index variable to keep track

  var _nodeIdx = this._nodes.indexOf(node);
  // find out which index the node locates in the array
  // checking if that node exists in the array
  if (_nodeIdx > -1) {
    this._nodes.splice(_nodeIdx, 1)
  } else {
    return 'Node doesn\'t exist';
  }
  // remove _edges later
  for (let i = 0; i < this._edges.length; i++) { // O(N^2)
    if (this._edges[i].includes(node)) {
      this._edges.splice(i, 1); // O(N)
      i--;
    }
  }
};

// Returns a boolean indicating whether two specified _nodes are connected.  Pass in the values contained in each of the two _nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(N)
  var _isFound = false;
  for (let i =0; i < this._edges.length;i++) {
    // check if the array at index 0 and index 1
    if (this._edges[i][0] === fromNode && this._edges[i][1] === toNode) {
      _isFound = true;
    }
  }
  return _isFound;
};

// Connects two _nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //O(1)
  // test case : input is 3,4 but they run the remove node method is reverse because undirected
  this._edges.push([fromNode,toNode],[toNode,fromNode]);
  // this._edges = [[fromNode,toNode],[toNode,fromNode]] -> nested arrays
  // allows us to access _edges from both directions
};

// Remove an edge between any two specified (by value) _nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { //O(N^2)
  for (let i = 0; i < this._edges.length; i++) {
    if ((this._edges[i][0] === fromNode && this._edges[i][1] === toNode)||(this._edges[i][0] === toNode && this._edges[i][1] === fromNode)) {
      this._edges.splice(i,1);
      i--; // because we took an element out
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // at least linear
  this._nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// polynomial -> worst case for removing a node and _edges, otherwise linear




