

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //so has access to .get(index), .set(index,value), and .each(callback)
};
HashTable.prototype.insert = function(k, v) {
  // according to the helper functions k should be a string
  var index = getIndexBelowMaxForKey(k, this._limit); //hashing function used to generate an index for our value
  // we have to be able to deal with collisions
  // that is when index for string k is the same as the index for string j even though k is not equal to j
  // since the test assumes k === v, we test this first before running your regular insert below
  // we just have to get(index) and see if === k, if not, that means it's a collision
  var node = {[k]:v} // the brackets made all of it work
  // [{[k]:v1},{[j]:v2},...]
  // collision: index (hash) the same but keys different

  var currentNode = this._storage.get(index);
  if (currentNode === undefined || Object.keys(currentNode)[0] === k){
      this._storage.set(index,node);
    } else { //collision
      currentNode[k] = v; // {previousk:previousv, k:v}
  }
  // we could then simply use linear probing or looking at the next available spot
  // ie by using a loop
  // you want to insert v into this._storage at the index that you get from the hashing function above
  // so when you get(index) it will return v
  // we want to override values if the key is the same

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
  // this should be as simple as get(index)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
   // do you just set the value as undefined?
};




/*
 * Complexity: What is the time complexity of the above functions? O(1)
 */


