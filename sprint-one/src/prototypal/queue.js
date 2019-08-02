var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueueInstance = Object.create(queueMethods);
  return someQueueInstance;
};

var queueMethods = {
  storage: {},
  front: 0,
  back: 0,
  enqueue: function(){

  },
  dequeue: function(){
    //if there's nothing in the queue, might as well not do anything
    if (queueMethods.front > 0){

    }
  },
  size: function(){
    return queueMethods.back-queueMethods.front;
  }
};


