var Tree = function(value) {
  var newTree = {};
  newTree.value = value; // first value = undefined
  // functional-shared style
  extend(newTree, treeMethods);
  newTree._children = []; // fix me => set to null originally
  return newTree;
};

var extend = function(destination, newObject) {
  for (var key in newObject) {
    destination[key] = newObject[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // newTree.children -> array
  // set newTree.value to input value
  if (typeof value !== 'number') {
    return 'sorry only accept numbers at this time'
  }
  var _child = Tree(value); //where to invoke? - replicating a tree = subtree
  this._children.push(_child); // push to the parent
};

//example
/**
 * Tree().addChild(5)
 * Tree().addChild(6)
 * Tree().children[0].addChild(7)
 *
 *
 */
/* tree = {
  value: undefined, -> can call it parent?
  children: [ {value: 5, children: [
                                    {value: 7, children: []}
                                  ]
              },
              {value: 6, children: [
                                    {value: 8, children: []}
                                    ]
              },
} */

//returns a boolean
treeMethods.contains = function(target) {
  // checking each node if it matches the target - checking the value
  var _result = (this.value === target);
  if (this._children.length > 0) {
    // go through each child of the parent node and check its children too
    for (var i = 0; _result === false && i < this._children.length; i++) {
      _result = this._children[i].contains(target); //how can we nest into the children?
    }
  }
  return _result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// extend  - linear O(n) -> in our case it's constant for every instance of a tree
// addChild - you're pushing to an array => constant because you're inserting at the end O(1)
// contains - polynomial depends on the height of the tree? - O(n^k) - k if a node has a child [revisit?]
