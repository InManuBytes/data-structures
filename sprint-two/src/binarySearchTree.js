//Implement a binarySearchTree class with the following properties:
/*  A .left property, a binary search tree (BST) where all values are lower than the current value.
    A .right property, a BST where all values are higher than the current value.
            value
            /    \
          .left  .right
    where .left and .right might themselves be subtrees or just "leaves" with a value
 */
var BinarySearchTree = function(value) {
  var newBinaryTree = Object.create(binarySearchMethods);
  //binary search trees have at least one inherent property: the starting value
  newBinaryTree._value = value;
  newBinaryTree._right = null;
  newBinaryTree._left = null;
  return newBinaryTree;
};
//              5
//            /    \
//          .left  .right
//
// insert 2
//
// 2 < 5 true
// check if left leaf is empty true
//
//               5
//            /    \
//          2
//        /
//      1

var binarySearchMethods = {
  // A .insert() method, which accepts a value and places it in the tree in the correct position.
  insert: function (value) {
    if (typeof value !== 'number') {
      return 'Not a number'
    }
    // you have to check if your value is bigger or smaller than this.value
    if (value < this._value) { // lower than go into the left
      // before you assign that value to the left you have to check if it already has a "child"
      if (this._left === null) { // if it doesn't - it's a leaf
        this._left = BinarySearchTree(value); // to insert you make it into a tree itself for future insertion

      } else { // if it does have children just run this recursively
        this._left.insert(value);
      }
    } else {
      if (this._right === null) { // if it doesn't
        this._right = BinarySearchTree(value); //assign the value
      } else { // if it does just run this recursively
        this._right.insert(value);
      }
    }
  },
  //A .contains() method, which accepts a value and returns a boolean
  //reflecting whether or not the value is contained in the tree.
  contains: function (value) {
    if (typeof value !== 'number') {
      return 'Not a number'
    }
    if (value === this._value) {
      return true;
    } else if (this._left !== null && value < this._value) {
      return this._left.contains(value);
    } else if (this._right !== null && value > this._value) {
      return this._right.contains(value);
    } else {
      return false;
    }
  },
  //A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
  depthFirstLog: function (callBack) {
    //start on the left and then go right
    //we want to build a call stack
    callBack(this._value);
    if (this._left !== null) {
      this._left.depthFirstLog(callBack);
    }
    if (this._right !== null) {
      this._right.depthFirstLog(callBack);
    }
  }
};

//Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

/*
 * Complexity: What is the time complexity of the above functions?
 */
