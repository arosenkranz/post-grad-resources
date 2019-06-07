var Node = function (data) {
  // The value in the node
  this.data = data
  // A pointer to all this node's children
  this.children = []
}


// In add, all we're doing is creating a new instance of Node, and appending it to the back of the children array of the given node. Don't forget to initialize the new Node with the data argument.

// Look up the filter method for remove. It is a very efficient way of returning only the elements of a given array that we're looking for.



var Tree = function () {
  this.root = null

  this.add = function (node, data) {

  }

  this.remove = function (node, data) {

  }
}