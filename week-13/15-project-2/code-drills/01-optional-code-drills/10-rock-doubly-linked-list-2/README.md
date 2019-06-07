# Computer Science

## Advanced Doubly Linked List

### Instructions

_In this activity, we're going to be extending the functionality of the doubly linked list constructors you created in the previous activity, much like you did for singly linked lists._

* If you struggled on the previous activity, there is a completed version for you to use in the hint folder; otherwise, copy over your `DoublyLinkedList.js` file from the previous activity.
    * Fill out the `AdvancedDoublyLinkedList.js` file and add more methods to the DoublyLinkedList constructor using the `prototype` property

* Create a `find` method that when given a value as an argument, iterates through the list starting from the head and returns the node that contains the target value.
    * If no corresponding node is found, return null.

* Create a `delete` method that takes in a node as an argument and deletes that node from the linked list.
    * Remember to link the nodes to the left and right of the deleted node together since the node between them is being deleted
    * If the deleted node is the `head` or `tail` of the list, you will have to update the `head` or `tail` key to point to the node to the right or left of the deleted node, respectively
    * If the deleted node is the only node in the list, you will have to set the `head` and the `tail` to be null
