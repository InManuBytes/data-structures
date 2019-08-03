var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueueInstance = Object.create(queueMethods);
  queueMethods.front = 0;
  queueMethods.back = 0;
  queueMethods.storage = {};
  return someQueueInstance;
};

var queueMethods = {
  storage: {},
  //we'll keep track of who's at the front and who's at the back [numerical key]
  //since those are the two that matter for modifying the queue
  //this will help us get the size of the queue
  front: 0,
  back: 0,
  enqueue: function(value){
    debugger
    var nextKey = queueMethods.back;
    queueMethods.back++;
    queueMethods.storage[nextKey] = value;
  },
  dequeue: function(){
    debugger
    //if there's nothing in the queue, might as well not do anything
    if (queueMethods.size() > 0){
      //we'll save the value so we can return it after deleting it
      var firstIn = queueMethods.storage[queueMethods.front];
      delete queueMethods.storage[queueMethods.front];
      //then reassign the front to the next key
      queueMethods.front++;
      return firstIn;
    }
  },
  size: function(){
    return queueMethods.back-queueMethods.front;
  }
};


