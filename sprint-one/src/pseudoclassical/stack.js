var Stack = function() {
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function (value) {
  var nextKey = this.top;
  this.top++;
  this.storage[nextKey] = value;
};

Stack.prototype.pop = function () {
  if ( this.size() > 0 ) {
    this.top--;
    var lastKey = this.top;
    var lastIn = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastIn;
  }
};

Stack.prototype.size = function () {
  return this.top;
};