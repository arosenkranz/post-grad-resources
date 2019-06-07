# Computer Science

## Queues using Linked Lists

### Instructions

In this activity we're going to be using the linked lists we just created in order to create a queue.

* Copy your files from the previous 3 activities into this folder. The `Queue.js` will be requiring them
    * If you got stuck on one, completed, versions are in the hint folder.

* Using a linked list, create a `Queue` constructor function
    * The queue should be initially empty

* Add a method to `enqueue` elements into the queue
    * This should create a new node in the linked list
    * The value of the node will be what we're adding to the queue

* Add a method to `dequeue` the first element of the queue
    * This should return the element and remove it from the queue
        * This should return the actual value of the element and not the node containing it
    * This should return null if the queue is empty
    
* Add a method to `peek` at the first element of the queue
    * This should return the element that will be `dequeue`d next without removing it from the queue
        * This should return the actual element and not the node containing it
    * This should return null if the queue is empty
