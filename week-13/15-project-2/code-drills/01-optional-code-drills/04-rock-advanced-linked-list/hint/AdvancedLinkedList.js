// Advanced Linked Lists
var LinkedList = require("./LinkedList.js");
var Node = require("./Node.js");


// the `findPrevious` helper function takes in the `head` of a linked
// list and a `targetNode` and returns the node that occurs immediately
// before the `targetNode`. We will be using this in the `insertBefore`
// method and the `delete` method in order to update all the relevant
// nodes
function findPrevious(head, targetNode) {
  // -------------------- Your Code Here --------------------
  // Initialize the current node we're looking at as the head of the list

  
  // while the current node isn't null and the next node isn't the target
  // node

  
    // set the current node to be the next node

    
  // Return the current node since we've either reached the end of the list
  // or found the target node


  // -------------------- End Code Area ---------------------
}


// Add the `find` method to the LinkedList constructor prototype
// it should take in the target value as the argument
LinkedList.prototype.find = function(value) {
  // -------------------- Your Code Here --------------------
  // set the current node to be the head of the list

  
  // while the current node isn't null and the current node doesn't
  // contain the value we're looking for

  
    // set the current node to be the next node

    
  // Return the current node since we've either reached the end of the list
  // or found the target value

  
  // -------------------- End Code Area ---------------------
}


// add the `insertAfter` method to the LinkedList constructor prototype
// it should take in the target value to insert and the target node you're
// inserting after as arguments
LinkedList.prototype.insertAfter = function(value, targetNode) {
  // -------------------- Your Code Here --------------------
  // create a new node containing the value we're passed

  
  // The new node is going between the targetNode and the next node, so
  // set the next of the new node to be the next node of the targetNode

  
  // set the targetNode's next to be the new node.

  
  // if the targetNode was the tail, then the new node needs to set as the
  // tail

  
  // increment the length since we have just added a node to the list

  
  // Return `this` to allow for chaining methods

  
  // -------------------- End Code Area ---------------------
}

// add the `insertAfter` method to the LinkedList constructor prototype
// it should take in the target value to insert and the target node you're
// inserting before as arguments
LinkedList.prototype.insertBefore = function(value, targetNode) {
  // -------------------- Your Code Here --------------------
  // create a new node containing the value we're passed

  
  // The new node is going between the targetNode and the node before
  // the target node, so set the next of the new node to be the targetNode

  
  // if the targetNode is the head

  
    //set the new node as the head

    
    // increment the length

    
  // else

  
    // use the `findPrevious` method to find the previous node from the
    // target node

    
    // if there is a previous node found

    
      // set the next pointer of that node to be the new node

      
      // increment length

      
  // return this to allow for chaining methods

  
  // -------------------- End Code Area ---------------------
}

// add the `insertAfter` method to the LinkedList constructor prototype
// it should take in a target value to delete from the list
LinkedList.prototype.delete = function (value) {
  // -------------------- Your Code Here --------------------
  // find the target node containing the value we're deleting

  
  // if we didn't find the value, return null

  
  // if the target node is the head

  
    // set the head to be the next node

    
    // decrement the length

    
    // if the target node is also the head

    
      // Set the tail to be equal to the new head

      
  // if the target node isn't the head,

  
    // find the previous node from the targetNode

    
    // if the previous node exists

    
      // set the next pointer of the previous node to be the node
      // after the node we're deleting

      
      // if the target node is the tail

      
        // set the tail to be the previous node

        
      // decrement the length

      
  // return the node we're deleting

  
  // -------------------- End Code Area ---------------------
}

module.exports = LinkedList;