var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new HashTable(); // will I be an object? or an array?
  // to refactor this we have to create a HashTable instead
  return set;
};

var setPrototype = {};
// items => strings
setPrototype.add = function(item) {
  this._storage.insert(item, item);
  // OLD CODE
  //add item to storage
  // if(!this.contains(item)) {
  //   this._storage.push(item);
  // }
  //let's not add things twice
};

setPrototype.contains = function(item) {
  if (this._storage.retrieve(item) === item){
    return true;
  } else {
    return false;
  }
  // OLD CODE
  // loop through the storage array and find matching item
  // to refactor we just have to find the corresponding index
  // use .retrieve(index) and check if it's undefined
  // return this._storage.includes(item);

};

setPrototype.remove = function(item) {
  // removing would be the same as the remove function in the hashTable
  this._storage.remove(item);
  // if (this.contains(item)) {
  //   var itemIdx = this._storage.indexOf(item)
  //   this._storage.splice(itemIdx,1);
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// OLD CODE: O(N^2)
// NEW CODE: constant? O(1) - if you're string is too long though, the hash function will take a bit longer
