// Advanced Linked Lists
var LinkedList = require("./LinkedList.js");
var Node = require("./Node.js");


// the `findPrevious` helper function takes in the `head` of a linked
// list and a `targetNode` and returns the node that occurs immediately
// before the `targetNode`. We will be using this in the `insertBefore`
// method and the `delete` method in order to update all the relevant
// nodes
function findPrevious(head, targetNode) {
  // Initialize the current node we're looking at as the head of the list
  var currNode = head;
  // while the current node isn't null and the next node isn't the target
  // node
  while (currNode !== null && currNode.getNext() !== targetNode) {
    // set the current node to be the next node
    currNode = currNode.getNext()
  }
  // Return the current node since we've either reached the end of the list
  // or found the target node
  return currNode;
}

// Add the `find` method to the LinkedList constructor prototype
// it should take in the target value as the argument
LinkedList.prototype.find = function(value) {
  // set the current node to be the head of the list
  currNode = this.head;
  // while the current node isn't null and the current node doesn't
  // contain the value we're looking for
  while (currNode !== null && currNode.getValue() !== value) {
    // set the current node to be the next node
    currNode = currNode.getNext();
  }
  // Return the current node since we've either reached the end of the list
  // or found the target value
  return currNode;
}

// add the `insertAfter` method to the LinkedList constructor prototype
// it should take in the target value to insert and the target node you're
// inserting after as arguments
LinkedList.prototype.insertAfter = function(value, targetNode) {
  // create a new node containing the value we're passed
  var newNode = new Node(value);
  // The new node is going between the targetNode and the next node, so
  // set the next of the new node to be the next node of the targetNode
  newNode.setNext(targetNode.getNext());
  // set the targetNode's next to be the new node.
  targetNode.setNext(newNode);
  // if the targetNode was the tail, then the new node needs to set as the
  // tail
  if (targetNode === this.tail) {
    this.tail = newNode;
  }
  // increment the length since we have just added a node to the list
  this.length++;
  // Return `this` to allow for chaining methods
  return this;
}

// add the `insertAfter` method to the LinkedList constructor prototype
// it should take in the target value to insert and the target node you're
// inserting before as arguments
LinkedList.prototype.insertBefore = function(value, targetNode) {
  // create a new node containing the value we're passed
  var newNode = new Node(value);
  // The new node is going between the targetNode and the node before
  // the target node, so set the next of the new node to be the targetNode
  newNode.setNext(targetNode);
  // if the targetNode is the head
  if (targetNode === this.head) {
    //set the new node as the head
    this.head = newNode;
    // increment the length
    this.length++;
  // else
  } else {
    // use the `findPrevious` method to find the previous node from the
    // target node
    var prevNode = findPrevious(this.head, targetNode)
    // if there is a previous node found
    if (prevNode !== null)
      // set the next pointer of that node to be the new node
      prevNode.setNext(newNode);
      // increment length
      this.length++;
  }
  // return this to allow for chaining methods
  return this;
}

// add the `insertAfter` method to the LinkedList constructor prototype
// it should take in a target value to delete from the list
LinkedList.prototype.delete = function (value) {
  // find the target node containing the value we're deleting
  var targetNode = this.find(value);
  // if we didn't find the value, return null
  if (targetNode === null) {
    return null;
  }
  // if the target node is the head
  if (targetNode === this.head){
    // set the head to be the next node
    this.head = targetNode.getNext();
    // decrement the length
    this.length--;
    // if the target node is also the head
    if (this.tail === targetNode) {
      // Set the tail to be equal to the new head
      this.tail = this.head;
    }
  // if the target node isn't the head,
  } else {
    // find the previous node from the targetNode
    var prevNode = findPrevious(this.head, targetNode);
    // if the previous node exists
    if (prevNode !== null) {
      // set the next pointer of the previous node to be the node
      // after the node we're deleting
      prevNode.setNext(targetNode.getNext());
      // if the target node is the tail
      if (targetNode === this.tail) {
        // set the tail to be the previous node
        this.tail = prevNode;
      }
      // decrement the length
      this.length--;
    }
  }
  // return the node we're deleting
  return targetNode;
}

module.exports = LinkedList;