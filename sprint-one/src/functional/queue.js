//remember First in, First Out - Enter at the end and leave from the front
var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  // Some thoughts: can we use closure to keep track of numeric keys - last key?
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {
    //Remember: add at the end
    var nextKey = someInstance.size();
    storage[nextKey] = value;
  };

  someInstance.dequeue = function() {
    //save the value being deleted
    dequeueValue = storage[0];
    //we can delete the first key
    delete storage[0];
    var keys = Object.keys(storage);
    //go over each key and decrease by 1
    keys.forEach(key=> {
      storage[Number(key)-1]=storage[key];     //assign to previous key -> move one step in line
      delete storage[key];     //delete that previous key
    });
    return dequeueValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};