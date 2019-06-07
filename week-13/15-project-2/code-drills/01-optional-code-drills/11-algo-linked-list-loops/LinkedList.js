// Circular Linked List

// Node constructor
function Node(value = null) {
  this.value = value;
  this.next = null;
}

// Linked List constructor
function LinkedList() {
  this.head = null;

  // Adds a node to the head
  this.insertAtHead = function(node) {
    node.next = this.head;
    this.head = node;
    return this;
  }

  // Finds a node containing the argument
  this.find = function(value) {
    var currNode = this.head;
    while(currNode) {
      if (currNode.value === value)
        return currNode
      currNode = currNode.next;
    }
    return null;
  }

  // Given a node, finds the previous node that points to it
  this.findPrevious = function(node) {
    var currNode = this.head;
    var prevNode = null;
    while (currNode) {
      if (currNode === node)
        return prevNode;
      prevNode = currNode;
      currNode = currNode.next;
    }
    return null;
  }

  // Deletes the argument node from the linked list
  this.delete = function(node) {
    var prevNode = this.findPrevious(node);
    prevNode.next = node.next;
    return node;
  }
}

// Checks if the current list contains a loop of nodes that link to an ancestor
LinkedList.prototype.checkLoop = function() {
  // -------------------- Your Code Here --------------------






  // -------------------- End Code Area ---------------------
}

module.exports = {LinkedList, Node};
