class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }
  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }
  pop() {
    (this.top > 0) ? this.top-- : this.top;
    /**this line also makes the function pass the tests but
     * unlike the if statement around the whole return way of writing this function,
     * it will run the other two lines below it anyways
     * performance-wise it performs better when trying to remove
     * from an empty stack 1080ms vs 1239ms
     * removing more items than were added 1155ms vs 1503ms
     * removing most recently added of two items 621ms vs 887ms
     * But sequentially adding and removing marginally worse 1315ms vs 1422ms
     * and removing newest item, after newer items have already been added and removed
     * 1592ms vs 1422
     *
     * */
    //if (this.top > 0) {
    //this.top--;
    var lastIn = this.storage[this.top]; //undefined if queue.size === 0
    delete this.storage[this.top]; //delete nothing?
    return lastIn;
    //}
  }
  size() {
    return this.top;
  }
}