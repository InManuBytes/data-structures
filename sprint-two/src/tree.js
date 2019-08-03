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
//          children: [
//              {value: 8,
    //             children: []
    //                 }
//   ]
// }

//returns a boolean
treeMethods.contains = function(target, node) {
  // checking each node if it matches the target - checking the value
  if (node === undefined){
    node = this;
  }
  if (node.value === target) {
    // if it does returns true
    return true;
   } else if (node.children.length > 0) {
    // go through each child of the parent node and check its children too
      for (var i = 0; i < node.children.length; i++){
        return node.contains(target, node.children[i]); //how can we nest into the children?
      }
    } else {
      return false;
    }

  // if it doesn't keep going and check every node
  // check if it has children and then recurse into them
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
