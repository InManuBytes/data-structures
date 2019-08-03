var Queue = function () {
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function (value) {
  var nextKey = this.back;
  this.back++;
  this.storage[nextKey] = value;
};

Queue.prototype.dequeue = function () {
  if ( this.size() > 0 ) {
    var firstKey = this.front;
    var firstIn = this.storage[firstKey];
    delete this.storage[firstKey];
    this.front++;
    return firstIn;
  }
};

Queue.prototype.size = function () {
  return this.back - this.front;
};