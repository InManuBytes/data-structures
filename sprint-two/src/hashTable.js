var HashTable = function() {
  debugger
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //so has access to .get(index), .set(index,value), and .each(callback)
  this._items = 0; // when this is 75% full double size, when it's 25% empty halve it
};
HashTable.prototype.insert = function(k, v) {
  // according to the helper functions k should be a string
  var index = getIndexBelowMaxForKey(k, this._limit); //hashing function used to generate an index for our value
  // we have to be able to deal with collisions
  // that is when index for string k is the same as the index for string j even though k is not equal to j
  // we just have to get(index) and see if === k, if not, that means it's a collision
  var tuple = [k, v];
  var currentBucket = this._storage.get(index);

  if (currentBucket !== undefined) { //if there is nothing in here yay, we can put it in our bucket
    var collision = true; // otherwise, collision
    for (let i = 0; collision === true && i < currentBucket.length; i++) {
      var currentTupleKey = currentBucket[i][0];
      if (currentTupleKey === k) { // if we have a previously used key we should overwrite the value
        currentBucket[i] = tuple; //overwrite
        collision = false; //get out of the loop
      } else if (i === currentBucket.length - 1) {
        currentBucket.push(tuple);
        this._items++;
      }
    }
  } else {
    currentBucket = []; //create a bucket
    currentBucket.push(tuple); // [[k,v]] throw our tuple in the bucket
    this._storage.set(index, currentBucket); // and put it in our HashTable
    this._items++; //increase the counter since we're using space in the LimitedArray
  }
  // check the size
  var currentCapacity = this._items/this._limit;
  if (currentCapacity >= .75) {
    this.resize('double');
  } else if (currentCapacity <= .25 && this._limit > 8) {
    this.resize('halve');
  }

};

HashTable.prototype.resize = function(factor) {
  if (factor === 'double') {
    this._limit *= 2;
  } else if (factor === 'halve') {
    this._limit /= 2;
  }
  var limit = this._limit; //16
  debugger
  var resizeArray = LimitedArray(limit); //0-16
  this._storage.each(function(bucket, index, storage) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];
        var index = getIndexBelowMaxForKey(key, limit); //0-16
        var currentBucket = resizeArray.get(index); //
        var tuple = [key,value];
        if (currentBucket !== undefined) {
          var collision = true; // otherwise, collision
          for (let i = 0; collision === true && i < currentBucket.length; i++) {
            var currentTupleKey = currentBucket[i][0];
            if (currentTupleKey === key) { // if we have a previously used key we should overwrite the value
              currentBucket[i] = tuple; //overwrite
              collision = false; //get out of the loop
            } else if (i === currentBucket.length - 1) {
              currentBucket.push(tuple);
            }
          }
        } else {
          currentBucket = []; //create a bucket
          currentBucket.push(tuple); // [[k,v]] throw our tuple in the bucket
          resizeArray.set(index, currentBucket); // and put it in our HashTable
        }
      }
    }
  });
}


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  if (currentBucket !== undefined){ //if there's something in our bucket
    for (let i = 0; i < currentBucket.length; i++) { //go through our bucket
      var currentTupleKey = currentBucket[i][0]; //check all the keys for the Tuples in our bucket
      if (currentTupleKey === k) { //if we find a matching key
        return currentBucket[i][1]; //return the value
      } else if (i === currentBucket.length - 1) { //if it turns out we never had stored k ie we get false positive with collision
        return undefined;
      }
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  if (currentBucket !== undefined){ // we only want to remove something if there's possibly something to remove
    for (let i = 0; i < currentBucket.length; i++) { //go through our bucket
      var currentTupleKey = currentBucket[i][0]; //check all the keys for the tuples in our bucket
      if (currentTupleKey === k) { //if we find a matching key
        currentBucket.splice(i, 1); //take out that tuple from our bucket
      }
    }
  } else {
    return 'Key not found';
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// As long as out buckets are kept at a constant size and our input strings are of a manageable size
// such that the hashing function runs discreetly, O(1)


