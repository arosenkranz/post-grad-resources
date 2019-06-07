var Node = function(data) {
  this.data = data;

  this.left = null;
  this.right = null;
}


var BST = function(root) {

  this.root = root

  this.insert = function(node) {
    // Keep track of original node
    var insert = node
    // initialize first node to check against as the root node
    node = this.root
    // Keep going until we find somewhere to insert
    while (node) {
      // If it should go to the left...
      if (node.left && insert.data < node.data) {
        node = node.left
      // If it should go to the right... 
      } else if (node.right && insert.data > node.data) {
        node = node.right
      } else if (!node.left && insert.data < node.data) {
        node.left = insert
        node = null
      } else if (!node.right && insert.data > node.data) {
        node.right = insert
        node = null
      }
    }
  }

  this.search = function(node) {
    // Keep track of the original value we're looking for
    var find = node
    // Initialize the first search to the root node
    node = this.root
    // Run this loop as long as node has value
    while (node) {
     
      if(find === node.data) {
        // Return the node if we find it
        return node
        // If the value is less than the node we're comparing against, we'll check to that node's left
      } else if (find < node.data) {

        node = node.left
      // The opposite of above
      } else if (find > node.data) {
        node = node.right
      } 
    }
    // If we never found our node, return null
    if (!node) {
      return null
    }
  }
}

var tree = new BST(new Node(10));

tree.insert(new Node(5));
tree.insert(new Node(15));
tree.insert(new Node(20));
tree.insert(new Node(0));
tree.insert(new Node(-5));
tree.insert(new Node(3));

var three = tree.root.left.left.right;

console.log(three)
console.log(tree.search(0))

console.log(tree.search(220))