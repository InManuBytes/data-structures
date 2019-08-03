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

//example
/**
 * Tree().addChild(5)
 * Tree().addChild(6)
 * Tree().children[0].addChild(7)
 *
 *
 */
// tree = {
//   value: undefined, -> can call it parent?
//   children: [
//         {value: 5,
//          children: [
//            {value: 7,
//             children: []
//            }
//          ]
//         },
//         {value: 6,
//          children: []
//         }
//   ]
// }

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

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
