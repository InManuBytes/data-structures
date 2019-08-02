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
  //this feels problematic but not sure where else to put it
  storage: {},
  enqueue: function(value){
    var nextKey = queueMethods.size();
    queueMethods.storage[nextKey] = value;
  },
  dequeue: function(){
    let firstIn = queueMethods.storage[0];
    delete queueMethods.storage[0];
    keys = Object.keys(queueMethods.storage);
    keys.forEach(key => {
      newKey = Number(key)-1;
      oldKey = Number(key);
      queueMethods.storage[newKey] = queueMethods.storage[oldKey];
      delete queueMethods.storage[oldKey];
    });
    return firstIn;
  },
  size: function(){
    return Object.keys(queueMethods.storage).length;
  }
};