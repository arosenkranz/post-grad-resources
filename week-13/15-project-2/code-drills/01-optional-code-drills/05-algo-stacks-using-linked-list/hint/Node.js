// Linked List - Node Constructor


// This constructor function creates a `Node` object 
// with a `value` and a pointer to the `next` node
// in the linked list
//
// By assigning null to `value`, if the constructor
// function isn't passed an argument, `value` will
// default to null
function Node(value = null) {
  // The default for `value` is null if an argument
  // isn't passed into the constructor
  this.value = value;
  this.next = null;

  // We include the `getValue` and `getNext` methods
  // so users won't have to operate on `value` and
  // `next` directly
  this.getValue = function() {
    return this.value;
  }
  this.getNext = function() {
    return this.next;
  }

  // The default for `value` is null if an argument
  // isn't passed into `setValue` or `setNext`
  this.setValue = function (newValue = null) {
    this.value = newValue;
    return this.value;
  }
  this.setNext = function (newNext = null) {
    this.next = newNext;
    return this.next;
  }
}

// We're going to be using this constructor in our
// linked list, so we will be exporting the constructor
// to use later.
module.exports = Node;