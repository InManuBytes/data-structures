var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueueInstance = Object.create(queueMethods);
  return someQueueInstance;
};

var queueMethods = {
  storage: {},
  //we'll keep track of who's at the front and who's at the back [numerical key]
  //since those are the two that matter
  //this will help us get the size of the queue
  front: 0,
  back: 0,
  enqueue: function(value){
    var nextKey = queueMethods.back;
    queueMethods.back++;
    queueMethods.storage[nextKey] = value;
  },
  dequeue: function(){
    //if there's nothing in the queue, might as well not do anything
    if (queueMethods.size > 0){
      var lastIn
      return lastIn;
    }
  },
  size: function(){
    return queueMethods.back-queueMethods.front;
  }
};


