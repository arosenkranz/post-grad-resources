# Computer Science

## Linked List

In this activity, we're going to be creating a very basic linked list. It will allow you to add to either the head or the tail, but not include any additional methods to add or delete from the list. We will be adding those in a later code drill.

### Instructions

* Copy your `Node.js` file from the previous activity into this folder. Our `LinkedList.js` fill will be importing it and using the constructor you created.
    * If you had trouble with the `Node` constructor, there is a completed one in the `hint` folder you can use.
    * For this activity, you should not access the `value` and `next` of a `Node` and operate on them directly. Instead, use the methods provided by the `Node` constructor in order to manipulate the values of the node.

* Within the `LinkedList.js` file, fill out the `LinkedList` constructor function by following the instructions below.

* Create a constructor function for a new `LinkedList` object that optionally takes in a value to instantiate the `LinkedList` with
    * The `LinkedList` object needs to keep track of the `head` node and the `tail` node.
        * The `head` node is the start of the linked list.
        * The `tail` node is the end of the linked list. Reaching this point means we've reached the end of the iteration.
        * If there are no nodes in the linked list, both the `head` and the `tail` should be null.
        * If there is only one node, the `head` and the `tail` should both point to it since it is both the start and end of the list.
    * The `LinkedList` object also needs to keep track of the length of the list.
    * If the user doesn't pass in a value when instantiating the list, then the `head` and `tail` should point to null and the `length` is 0
    * If the user does pass in a value when instantiating the list, then the `head` and `tail` should both point to a new `Node` object made with that value. `length` will be 1 in this case since there is one node in list.

* Create a `getListHead` method that returns the `head` of the list

* Create a `getListTail` method that returns the `tail` of the list

* Create a `getListLength` method that returns the `length` of the list, which is also the number of nodes in the list

* Create a `insertAtHead` method that takes in a value, creates a new node with that value, and inserts that node before the `head` node.
    * This should update the `head` to point at the new node and increment the length of the list.
    * The new node should be updated to point at the previous head.
    * If there was no `head`, then set the new node to be both the `head` and the `tail` 
    * Increment `length` afterwards
    * This method should return `this` so we can chain methods together such as `currLinkedList.insertAtHead(5).insertAtHead(9)`

* Create a `insertAtTail` method that takes in a value, creates a new node with that value, and inserts that node after the `tail` node.
    * The `tail` should be updatede to point at the new element.
    * This should update the `tail` to point at the new node and increment the length of the list.
    * Increment `length` afterwards
    * This method should return `this` so we can chain methods together such as `currLinkedList.insertAtTail(3).insertAtTail(7)`

