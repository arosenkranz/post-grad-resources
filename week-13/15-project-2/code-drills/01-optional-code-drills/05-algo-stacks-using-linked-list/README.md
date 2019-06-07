# Computer Science

## Stacks using Linked Lists

### Instructions 

In this activity we're going to be using the linked lists we just created in order to create a stack.

* Copy your files from the previous 3 activities into this folder. The `Stack.js` will be requiring them
    * If you got stuck on one, completed, versions are in the hint folder.

* Using a linked list, create a `Stack` constructor function
    * The stack should be initially empty

* Add a method to `push` elements to the stack
    * This should create a new node in the linked list
    * The value of the node will be what we're pushing into the stack

* Add a method to `pop` the most recently added element of the stack
    * This should return the element and remove it from the stack
        * This should return the actual value of the element and not the node containing it
    * This should return null if the stack is empty
    
* Add a method to `peek` at the most recently added element of the stack
    * This should return the element that will be `pop`ed next without removing it from the stack
        * This should return the actual element and not the node containing it
    * This should return null if the stack is empty
