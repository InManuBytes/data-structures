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
    var newNode = new Node(value);

    if (list.head === null) {
      list.head = newNode;
      // adding this: assign tail to node
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  // removes the first node from the list and returns its value
  list.removeHead = function() {
    // first we have to save the first node's value to a variable so we can return it after we remove it
    // we reassign the head to be the first node's .next node
    // delete that first node
    // return the first node's value we saved from the first step
    if (this.head !== null) {
      var oldHead = this.head;
      this.head = this.head.next;
      return oldHead.value;
    } else {
      return null;
    }

  };

  //returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target, node) {
    // example list = {node1, node2}
    // node1 => {value: value1, next: node2}
    // target = value we input
    // check the object  - node of the list
    // since we know the key will always be value we an look at value key for each node
    // we create a place to save our result, which will be a boolean
    // var result = false;
    // we don't need this since we can just return it directly
    // we can add an extra argument to make this function recursive ^see the argument next to target
    // if node is undefined this is the first use of the function

    // list.contains(target) - first time it's called
    if (node === undefined){
     // so we set node to be the head since all the other nodes point to the next one from there
      node = this.head;
    }
    // see if value matches target
    // if it does return true -> exit out?
    // else if it doesn't match target move onto next
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return list.contains(target, node.next);
    }

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

 // Node - Constructor
 // addToTail - constant O(1)
 // removeHead - constant O(1)
 // contains - linear O(n)

 // In conclusion - O(n) -> worst case for contains
