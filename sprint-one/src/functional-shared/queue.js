// Remember don't "t h i s", not even inside the comments as one of the tests will catch reference in es6

var Queue = function() {
  // Declaring the variable below means that we do not extend the constructor function
  //i.e. that the Object.keys(Queue).length = 0
  var someQueueInstance = {};
  someQueueInstance.enqueue = queueMethods.enqueue;
  someQueueInstance.dequeue = queueMethods.dequeue;
  someQueueInstance.size = queueMethods.size;
  return someQueueInstance;
};

var queueMethods = {
  storage: {},
  enqueue: function(){

  },
  dequeue: function(){

  },
  size: function(){
    return Object.keys(queueMethods.storage).length;
  }
};

var queue = new Queue();
