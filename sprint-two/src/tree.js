var Tree = function(value) {
  var newTree = {};
  newTree.value = value; //first value = undefined? if
  debugger
  // your code here
  // functional-shared style
  extend(newTree,treeMethods)
  newTree.children = [];  // fix me => set to null originally

  return newTree;
};

var extend = function(destination,newObject) {
  for (var key in newObject) {
    destination[key] = newObject[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  debugger
  // newTree.children -> array
  // make a tree?
  // set newTree.value to input value
  var child = Tree(value) //where to invoke? - replicating a tree = subtree
  this.children.push(child)
  // push to the parent
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
  children: [
        {value: 5,
         children: [
           {value: 7,
            children: []
           }
         ]
        },
        {value: 6,
         children: [
             {value: 8,
            children: []
                }
  ]
} */

//returns a boolean
treeMethods.contains = function(target) {
  // checking each node if it matches the target - checking the value
  var result = (this.value === target);
  if (this.children.length > 0) {
    // go through each child of the parent node and check its children too
      for (var i = 0; i < this.children.length; i++){
        result = result || this.children[i].contains(target); //how can we nest into the children?
      }
    }
  return (result);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // extend  - linear O(n) -> in our case it's constant for every instance of a tree
 // addChild - you're pushing to an array => constant because you're inserting at the end O(1)
 // contains - polynomial depends on the height of the tree? - O(n^k) - k if a node has a child [revisit?]
