// Advanced Doubly Linked List

var BasicDDL = require("./DoublyLinkedList.js");
var Node = BasicDDL.Node;
var DoublyLinkedList = BasicDDL.DoublyLinkedList;


// The `find` method takes in a value as argument and returns the first node containing that value inside the linked list
DoublyLinkedList.prototype.find = function (value) {
  // -------------------- Your Code Here --------------------
  // Start the iteration at the head of the list

  
  // Iterate through the list until reaching the tail

  
    // If the value of the current node matches the argument value, return the current node

    
    // If the current node doesn't match the argument value, iterate to the next node in the list

    
  // If we iterate through the entire list without finding the target node, return null

  
  // -------------------- End Code Area ---------------------
}


// The `delete` method takes in a target node as argument and removes the target node from the linked list
// The `delete` method returns the node that was deleted
DoublyLinkedList.prototype.delete = function (targetNode) {
  // -------------------- Your Code Here --------------------
  // If the target node is the only node left in the list

  
    // Set the head and tail to null

    
    // Return the node

    
  // If the target node is the head of the list

  
    // Set the head to be the node to the right of the node being deleted

    
  // If the target node is the tail of the list

  
    // Set the tail to be the node to the left of the target node

    
  // If the target node is neither the head nore the tail of the list,

  
    // Link the node to the left of the target node to the node to the right of the target node

    
    // Link the node to the right of the target node to the node to the left of the target node


  // Remove the pointers from the target node to other nodes and return it

  

  // -------------------- End Code Area ---------------------
}

module.exports = DoublyLinkedList;