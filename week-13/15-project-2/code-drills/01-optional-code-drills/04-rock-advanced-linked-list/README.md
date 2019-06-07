# Computer Science

## Linked Lists - Advanced

### Instructions 

In this activity, we're going to be adding more methods onto the basic linked list we created in the previous activity. We will be adding in a search, an insert after, a insert before, and a delete functionality.

* Copy your `Node.js` and `LinkedList.js` files from the previous activities into this folder. Our `AdvancedLinkedList.js` fill will be importing it and using constructor you created.
    * If you had trouble with the either of the previous constructors, there are completed ones in the `hint` folder you can use.
    * For this activity, you should only use the methods provided by the `Node` constructor in order to manipulate the values of the node.
        * You can modify the values of the `LinkedList` constructor

* You will be using the `prototype` property in order to add methods onto your `LinkedList` constructor

* Create a `find` method that when given a value as an argument, iterates through the list starting from the head and returns the node that contains the target value.
    * If no corresponding node is found, return null.

* Create a `insertAfter` method that takes in a value and a node as an argument. It will create a new node containing the argument value and insert the new node after the argument node.
    * Return `this` after you're done in order to facilitate method chaining.
    * If the node passed in as an argument is the `tail` of the list, make sure to update the `tail`
    * Increment the `length` of the list afterwards.

* Create a `insertBefore` method that takes in a value and a node as arguments. It will create a new node containing the argument value and insert the new node before the argument node.
    * Return `this` after you're done in order to facilitate method chaining.
    * If the node passed in as an argument doesn't exist in the list, do nothing.
    * If the node passed in as an argument is the `head` of the list, make sure to update the `head`
    * Increment the `length` of the list afterwards.

* Create a `delete` method that takes in a value as an argument. It will find the first node in the list with the corresponding value and delete it.
    * If the value passed in as an argument doesn't exist in the list, do nothing.
    * If the value passed in is the `head` or `tail` of the list, make sure to update the corresponding property.
    * Remember to update the `next` pointer of the previous node to be the node after what you deleted
    * Decrement the `length` of the list afterwards.
    * Return the node you just deleted from the list.
