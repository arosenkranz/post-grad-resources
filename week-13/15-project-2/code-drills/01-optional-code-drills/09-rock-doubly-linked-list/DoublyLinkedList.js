// Doubly Linked List


// `Node` constructor that can initialize with a value
// If not given a value when initializing, `value` defaults to null
// `left` and `right` both default to null when initialised
function Node(value = null) {
// -------------------- Your Code Here --------------------




// -------------------- End Code Area ---------------------
}


// `DoublyLinkedList` constructor
// The `head` and `tail` default to null when initialised
function DoublyLinkedList() {
  // -------------------- Your Code Here --------------------

  


  // -------------------- End Code Area ---------------------

  
  // The `insertBefore` method takes a value and a node as argument and inserts a new node containing the argument value before the argument node
  this.insertBefore = function (value, node) {
    // -------------------- Your Code Here --------------------
    

    


    
    // -------------------- End Code Area ---------------------
  }


  // The `insertBefore` method takes a value and a node as argument and inserts a new node containing the argument value after the argument node
  this.insertAfter = function (value, node) {
    // -------------------- Your Code Here --------------------
    
    


    
    
    // -------------------- End Code Area ---------------------
  }
}


module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
}
