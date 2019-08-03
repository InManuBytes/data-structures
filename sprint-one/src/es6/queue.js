class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }
  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }
  dequeue() {
    var firstIn = this.storage[this.front];
    delete this.storage[this.front];
    (this.size() > 0) ? this.front++ : this.front;
    return firstIn;
  }
  size() {
    return this.back - this.front;
  }
}
