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
    // Create a new node with the value passed as argument


    // Check if this is the first element added to the list

    
      // If it is, set the head and tail to be the new node

      
      // return `this` to allow for method chaining and escape the rest of the code in this function
    

    // If the target node is the head, set the newNode to be the new head
    

    // Set the right pointer of the new node to be the target node

    
    // Set the left pointer of the new node to be the node the left pointer of the target node used to point to
    
    
    // If the left node of the target node isn't null, set that left node's right pointer to be the new node
    
    
    // Set the left pointer of the target node 
    
    
    // return `this` to allow for method chaining
    
    
    // -------------------- End Code Area ---------------------
  }

  
  // The `insertBefore` method takes a value and a node as argument and inserts a new node containing the argument value after the argument node
  this.insertAfter = function (value, node) {
    // -------------------- Your Code Here --------------------
    // Create a new node with the value passed as argument

    
    // Check if this is the first element added to the list

    
      // If it is, set the head and tail to be the new node

      
      // return `this` to allow for method chaining and escape the rest of the code in this function
    

    // If the target node is the tail, set the newNode to be the new tail
    
    
    // Set the left pointer of the new node to be the target node
    
    
    // Set the right pointer of the new node to be the node the right pointer of the target node used to point to
    
    
    // If the right node of the target node isn't null, set that right node's right pointer to be the new node
    
    
    // Set the left pointer of the target node 
    
    
    // return `this` to allow for method chaining
    
    
    // -------------------- End Code Area ---------------------
  }
}


module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
}
