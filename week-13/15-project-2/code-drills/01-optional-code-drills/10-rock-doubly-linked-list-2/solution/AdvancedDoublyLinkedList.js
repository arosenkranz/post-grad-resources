// Advanced Doubly Linked List

var BasicDDL = require("./DoublyLinkedList.js");
var Node = BasicDDL.Node;
var DoublyLinkedList = BasicDDL.DoublyLinkedList;


// The `find` method takes in a value as argument and returns the first node containing that value inside the linked list
DoublyLinkedList.prototype.find = function (value) {
  // Start the iteration at the head of the list
  var currNode = this.head;
  // Iterate through the list until reaching the tail
  while (currNode) {
    // If the value of the current node matches the argument value, return the current node
    if (currNode.value === value) return currNode;
    // If the current node doesn't match the argument value, iterate to the next node in the list
    currNode = currNode.right;
  }
  // If we iterate through the entire list without finding the target node, return null
  return null;
}


// The `delete` method takes in a target node as argument and removes the target node from the linked list
// The `delete` method returns the node that was deleted
DoublyLinkedList.prototype.delete = function (targetNode) {
  // If the target node is the only node left in the list
  if (targetNode === this.head && targetNode === this.tail) {
    // Set the head and tail to null
    this.head = targetNode.left = null;
    this.tail = targetNode.right = null;
    // Return the node
    return targetNode;  
  }

  // If the target node is the head of the list
  if (targetNode === this.head) {
    // Set the head to be the node to the right of the node being deleted
    this.head = targetNode.right;
    targetNode.right.left = null;
  // If the target node is the tail of the list
  } else if (targetNode === this.tail) {
    // Set the tail to be the node to the left of the target node
    this.tail = targetNode.left;
    targetNode.left.right = null;
  // If the target node is neither the head nore the tail of the list,
  } else {
    // Link the node to the left of the target node to the node to the right of the target node
    targetNode.left.right = targetNode.right;
    // Link the node to the right of the target node to the node to the left of the target node
    targetNode.right.left = targetNode.left;
  }

  // Remove the pointers from the target node to other nodes and return it
  targetNode.left = null;
  targetNode.right = null;
  return targetNode;
}

module.exports = DoublyLinkedList;