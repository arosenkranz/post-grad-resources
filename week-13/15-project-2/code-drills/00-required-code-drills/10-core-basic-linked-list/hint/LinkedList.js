// Linked List Constructor

var Node = require("./Node.js");

// This constructor function creates a `LinkedList`
// object that keeps track of the `head` and the
// `tail` of the `LinkedList`. If a value is passed
// in during initialization, it will create a `Node`
// with that value and assign it as the `head` and
// the tail. Otherwise, the `head` and the `tail`
// will be null.
function LinkedList(value = null) {
  // -------------------- Your Code Here --------------------
  // If the value isn't null, we create a new node
  // with the value.



  // Assigning the `head` and the `tail` to be either
  // the new node we created, or null



  // if we created this list with an initial value,
  // set length to 1, otherwise, the length is 0


  // `getListHead` returns the node that's the `head`
  // of this list



  // `getListTail` returns the node that's the `tail`
  // of this list



  // `'getListLength` returns the number of nodes in
  // this list



  // `insertAtHead` takes in an argument and creates
  // a new node with that argument as its value as the
  // new `head` of the list


    // Create a new node with the value passed as argument

    
    // Set the next node from this node to be the current
    // head of the linked list

    
    // Set the new node as the new head of the list

    
    // If there isn't already a tail, set the new node to
    // also be the tail of the list

    
    // Increment the length

    
    // Return `this` to allow for chaining methods



  // `insertAtTail` takes in an argument and creates
  // a new node with that argument as its value as the
  // new `tail` of the list


    // Create a new node with the value passed as argument

    
    // If there is already a tail, set it's next pointer
    // to be the new node.

    
    // Set the new node to be the new tail of the list

    
    // If there isn't a head, set the new node as the head
    // of the list

    
    // increment the length


    // Return `this` to allow for chaining methods




  // -------------------- End Code Area ---------------------
}

// We're going to be adding on to this constructor, so
// so we will be exporting the constructor for later use
module.exports = LinkedList;