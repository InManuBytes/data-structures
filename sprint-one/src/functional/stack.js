var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = someInstance.size();
    var nextKey = (size>0) ? size++: 0;
    storage[nextKey] = value;
  };

  someInstance.pop = function() {
    var size = someInstance.size()-1;
    let poppedValue = storage[size];
    delete storage[size];
    return poppedValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
