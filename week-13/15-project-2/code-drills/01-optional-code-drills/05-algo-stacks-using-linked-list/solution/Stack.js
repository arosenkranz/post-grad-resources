// Stacks using Linked Lists
var LinkedList = require("./AdvancedLinkedList");


// The `Stack` constructor function creates a `Stack`
// object that stores the stack using a linked list
function Stack() {
  // instantiate the stack with an empty LinkedList
  this.stack = new LinkedList();
  // the `push` method takes in a value and adds it to the stack
  this.push = function(value) {
    // insert the new value before the head of the list
    this.stack.insertAtHead(value);
  }
  // the `pop` method removes the most recently added value from
  // the stack and returns it
  this.pop = function () {
    // if the head of the linked list is empty, return null
    if (this.stack.getListHead() === null) return null;
    // store the value of the head of the linked list
    var listHeadValue = this.stack.getListHead().getValue();
    // use that value to delete the head
    var poppedNode = this.stack.delete(listHeadValue);
    // return the value of the deleted node
    return poppedNode.getValue();
  }
  // the `peek` method returns the value of the most recently
  // added element of the stack
  this.peek = function() {
    // if the stack is empty, return null; otherwise, return the
    // value of the head
    return this.stack.getListHead() === null ? null :this.stack.getListHead().getValue();
  }
}

module.exports = Stack;