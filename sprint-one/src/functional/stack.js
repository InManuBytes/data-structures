var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var nextKey = someInstance.size();
    storage[nextKey] = value;
  };

  someInstance.pop = function() {
    var lastKey = someInstance.size()-1;
    var poppedValue = storage[lastKey];
    delete storage[lastKey];
    return poppedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
