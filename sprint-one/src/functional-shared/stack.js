// Remember don't "t h i s", not even inside the comments as one of the tests will catch reference in es6
var Stack = function() {
  // Declaring the variable below means that we do not extend the constructor function
  //i.e. that the Object.keys(Queue).length = 0
  var someStackInstance = {};
  stackMethods.storage = {};
  someStackInstance.push = stackMethods.push;
  someStackInstance.pop = stackMethods.pop;
  someStackInstance.size = stackMethods.size;
  return someStackInstance;
};

var stackMethods = {
  storage: {},
  push: function(value){
    var nextKey = stackMethods.size();
    stackMethods.storage[nextKey] = value;
  },
  pop: function(){
    var lastKey = stackMethods.size()-1;
    var lastIn = stackMethods.storage[lastKey];
    delete stackMethods.storage[lastKey];
    return lastIn;
  },
  size: function(){
    return Object.keys(stackMethods.storage).length;
  }
};

