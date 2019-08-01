// Remember don't "t h i s", not even inside the comments as one of the tests will catch reference in es6
var Stack = function() {
  // Declaring the variable below means that we do not extend the constructor function
  //i.e. that the Object.keys(Queue).length = 0
  var someQueueInstance = {};
  someQueueInstance.push = queueMethods.push;
  someQueueInstance.pop = queueMethods.pop;
  someQueueInstance.size = queueMethods.size;
  return someQueueInstance;
};

var stackMethods = {
  storage: {},
  push: function(){

  },
  pop: function(){

  },
  size: function(){
    return Object.keys(queueMethods.storage).length;
  }
};


