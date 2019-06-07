
var Node = function (data) {
  // The value in the node
  this.data = data
  // A pointer to all this node's children
  this.children = []
}


var Tree = function () {
  this.root = null

  this.add = function (node, data) {
    // Push a newly initialized node to the children array of Node
    node.children.push(new Node(data))
  }

  this.remove = function (node, data) {
    // Returns a node's children array, but without node's whose data === data.
    node.children.filter(function (child) {
      return child.data !== data
    })
  }
}