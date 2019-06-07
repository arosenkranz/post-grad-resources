// Queues using Linked Lists
var LinkedList = require("./AdvancedLinkedList");


// The `Queue` constructor function creates a `Queue`
// object that stores the queue using a linked list
function Queue() {
  // instantiate the queue with an empty LinkedList
  this.queue = new LinkedList();
  // the `enqueue` method takes in a value and adds it to the queue
  this.enqueue = function(value) {
    // insert the new value after the tail
    this.queue.insertAtTail(value);
  }
  // the `dequeue` method removes the first element from
  // the queue and returns its value
  this.dequeue = function () {
    // if the head of the linked list is empty, return null
    if (this.queue.getListHead() === null) return null;
    // store the value of the head of the linked list
    var listHeadValue = this.queue.getListHead().getValue();
    // use that value to delete the head
    var dequeuedNode = this.queue.delete(listHeadValue);
    // return the value of the deleted node
    return dequeuedNode.getValue();
  }
  // the `peek` method returns the value of the first
  // element of the queue
  this.peek = function() {
    // if the queue is empty, return null; otherwise, return the
    // value of the head
    return this.queue.getListHead() === null ? null :this.queue.getListHead().getValue();
  }
}

module.exports = Queue;