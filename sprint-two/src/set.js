var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // will I be an object? or an array?
  // to refactor this we have to create a LimitedArray instead
  return set;
};

var setPrototype = {};
// items => strings
setPrototype.add = function(item) {
  //add item to storage
  if(!this.contains(item)) {
    this._storage.push(item);
  }
  //let's not add things twice
};

setPrototype.contains = function(item) {
  // loop through the storage array and find matching item
  // to refactor we just have to find the corresponding index
  // use .retrieve(index) and check if it's undefined
  return this._storage.includes(item);

};

setPrototype.remove = function(item) {
  // removing would be the same as the remove function in the hashTable
  if (this.contains(item)) {
    var itemIdx = this._storage.indexOf(item)
    this._storage.splice(itemIdx,1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// O(N^2)
