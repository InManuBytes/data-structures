var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //takes a value and adds it to the end of the list
  list.addToTail = function(value) {
    //since each value in the list is actually a node we'd want to
    //1. create a Node to store the value
    //2. then we need to check if head is null so we know if the list is empty
    //3. if it's null we need change the head to point at the value of this node
    //4. otherwise if the list is not empty
    //5. we check what node the tail points to and
    //6. assign its .next to be this new Node's value
    //7. and then reassign the tail to be the this new Node's value as well
  };

  // removes the first node from the list and returns its value
  list.removeHead = function() {
    // first we have to save the first node's value to a variable so we can return it after we remove it
    // we reassign the head to be the first node's .next node
    // delete that first node
    // return the first node's value we saved from the first step
  };

  //returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target, node) {
    // we create a place to save our result, which will be a boolean
    // we can add a extra argument to make this function recursive ^see the argument next to target
    // if node is undefined this is the first use of the function
    // so we set node to be the head since all the other nodes point to the next one from there
    // check if the node's value is the same as the target
    // if it is return the result
    // if not check if the node's .next points to something
    // call the contains function again on that node
    // else return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
