var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someStackInstance = Object.create(stackMethods);
  stackMethods.storage = {};
  stackMethods.top = 0;
  return someStackInstance;
};

var stackMethods = {
  storage: {},
  //We set top to 0 so the next available "top" node is the same as the size as we push and pop
  top: 0,
  push: function(value){
    var nextKey = stackMethods.top;
    stackMethods.storage[nextKey] = value;
    stackMethods.top++;
  },
  pop: function(){
    //make sure we don't do anything if there's nothing in the stack
    if (stackMethods.top > 0) {
      //well decrease the next available node
      stackMethods.top--;
      //if we didn't do the line before topNode = stackMethods.top - 1
      var topNode = stackMethods.top;
      var lastIn = stackMethods.storage[topNode];
      delete stackMethods.storage[topNode];
      return lastIn;
    }
  },
  size: function(){
    return stackMethods.top;
  }
};


