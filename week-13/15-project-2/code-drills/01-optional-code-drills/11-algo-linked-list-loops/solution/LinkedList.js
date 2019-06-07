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
  // We will be using two pointers, one iterating through the list one node at a time and another skipping every other node
  // If the list contains a loop, then the faster pointer will circle around and intersect with the slower pointer
  // If the fast pointer reaches the end of the list, then you know that there is no loop within the list
  var slowPointer = this.head;
  var fastPointer = this.head && this.head.next;
  // While the slow pointer hasn't reached the end of the list and the fast pointer hasn't reached the end of the list
  // You can check for this by making sure that the slow pointer isn't null and the fast pointer and the fastPointer's next node exists
  while (slowPointer && fastPointer && fastPointer.next) {
    // If the slow pointer and the fast pointer ever point to the same node, the fast pointer has looped around, so return true
    if (slowPointer === fastPointer) return true;
    // increment the slow pointer
    slowPointer = slowPointer.next;
    // double increment the fast pointer
    fastPointer = fastPointer.next.next;
  }
  // If we reach the end of the list with any pointer then the list does not contain a loop
  return false;
}

module.exports = {LinkedList, Node};
