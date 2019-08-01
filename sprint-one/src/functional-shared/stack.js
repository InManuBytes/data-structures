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
    var nextKey = stackMethods.size()+1;
    stackMethods.storage[nextKey] = value;
  },
  pop: function(){
    var lastIn = stackMethods.storage[stackMethods.size()];
    delete stackMethods.storage[stackMethods.size()];
    return lastIn;
  },
  size: function(){
    return Object.keys(stackMethods.storage).length;
  }
};


