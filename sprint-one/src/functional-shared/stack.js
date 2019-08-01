var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueueInstance = {};
  someQueueInstance.push = queueMethods.push;
  someQueueInstance.pop = queueMethods.pop;
  someQueueInstance.size = queueMethods.size;
  return someQueueInstance;
};

var stackMethods = {
  storage: {},
  enqueue: function(){

  },
  dequeue: function(){

  },
  size: function(){
    return Object.keys(queueMethods.storage).length;
  }
};


