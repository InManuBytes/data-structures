var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  /**
   * Remember don't write the word t h i s, not even inside the comments as one of the tests
   * will catch reference in es6
   */

  // Declaring the variable below means that we do not extend the constructor function
  // i.e. that the Object.keys(Queue).length = 0
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
