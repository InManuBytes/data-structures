// Remember don't "t h i s", not even inside the comments as one of the tests will catch reference in es6
var Stack = function() {
  // Declaring the variable below means that we do not extend the constructor function
  //i.e. that the Object.keys(Queue).length = 0
  var someQueueInstance = {};
  someQueueInstance.push = stackMethods.push;
  someQueueInstance.pop = stackMethods.pop;
  someQueueInstance.size = stackMethods.size;
  return someQueueInstance;
};

var stackMethods = {
  //this feels problematic but not sure where else to put it
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

