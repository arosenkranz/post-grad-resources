# Computer Science

## Linked Lists

Linked Lists are a data structure consisting of multiple nodes that contain the data we're keeping track of. Each node is "linked" to another node, meaning that it either points to or has another node pointing to it. This way, when someone has access to the first element of a linked list, they can traverse the entire list and see every element within that list.

### Instructions

* In this series of activities, we're going to be building a linked list and all its associated methods up from scratch.
    * Within the `Node.js` file, fill out the `Node` constructor function by following the instructions below.

* The first step is to construct the `Nodes` of a linked list. We will be using constructor functions in order to do this.

* Create the constructor function for a new `Node` object that optionally takes in a value to instantiate the `Node` with.
    * The `Node` object needs to keep track of it's `value` along with a pointer to the `next` element of the linked list.
    * The `value` should be null for now unless the constructor function is called with an argument, in which case we use the argument as the `value` instead of the default null
    * `next` will be null until we link this `Node` to another one.

* Next, we're going to add some methods to our `Node` object so we're not operating directly on the data stored inside it.
    * Add a `getValue` method that returns the value of our node
    * Add a `getNext` method that returns the node `next` points to
    * Add a `setValue` method that stores the argument inside `value`
        * If this isn't passed an argument, it should set `value` to be null
    * Add a `setNext` method that stores the node passed to it as argument
        * If this isn't passed an argument, it should set `setNext` to be null
