var Node = function(data) {
  this.data = data;

  this.left = null;
  this.right = null;
}


// YOUR WORK HERE



// TESTS
var tree = new BST(new Node(10));

tree.insert(new Node(5));
tree.insert(new Node(15));
tree.insert(new Node(20));
tree.insert(new Node(0));
tree.insert(new Node(-5));
tree.insert(new Node(3));

var three = tree.root.left.left.right;

console.log(three)