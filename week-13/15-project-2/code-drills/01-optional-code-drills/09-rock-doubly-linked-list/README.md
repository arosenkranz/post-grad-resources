# Computer Science

## Doubly Linked List

_In this activity, we're going to be creating the framework for a doubly linked list. A doubly linked list is a linked list where each node keeps track of the node before and after it, so we can traverse the tree both forwards and backwards._

### Instructions

* For this activity, we will be operating directly on the properties we're storing in the `Node`
    * Create a `Node` constructor that keeps track of the `value` of this node, the node to the `left` of this node, and the node to the `right` of this node.
    * When a `Node` is initialized, if it is passed a value, store that value within the node. If it isn't passed a value, then initialize the `value` of the node to null.
    * The `left` and `right` of the node should initialize to null.

* Then create a `DoublyLinkedList` constructor that keeps track of the `head` and `tail` of the list.
    * All values should initialize to null.

* Add an `insertBefore` method that takes in a value and a node as arguments. It will create a new `Node` containing the value and insert the new node before the argument node.
    * If the node being inserted is the first element of the list, it will be both the `head` and the `tail`
    * If the argument node is the `head` of the list, you will have to update the `head` to point to the new node.
    * Remember to update the `left` and `right` pointers of both the new node and the argument node.

* Add an `insertAfter` method that takes in a value and a node as arguments. It will create a new `Node` containing the value and insert the new node after the argument node.
    * If the node being inserted is the first element of the list, it will be both the `head` and the `tail`
    * If the argument node is the `tail` of the list, you will have to update the `tail` to point to the new node.
    * Remember to update the `left` and `right` pointers of both the new node and the argument node.
