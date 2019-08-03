var Tree = function(value) {
  var newTree = {};
  newTree.value = value; //first value = undefined? if
  // your code here
  // functional-shared style
  extend(newTree,treeMethods)
  newTree.children = null;  // fix me

  return newTree;
};

var extend = function(destination,newObject) {
  for (var key in newObject) {
    destination[key] = newObject[key];
  }
}


var treeMethods = {};

treeMethods.addChild = function(value) {

};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
