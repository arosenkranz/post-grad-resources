var Node = function(data) {
  this.data = data;

  this.left = null;
  this.right = null;
}



var BST = function(root) {

  this.root = root

  // A useful strategy to solve this one it to evalutate whether the given node should go right or left. We can continue this process down the tree until we hit a non-existent node, at which point we can assign our node to that spot
  this.insert = function(node) {
    // Make a variable that tracks the initial value of node
    // Set a changing variable initialized to the root node.
    // While the comparison node (the one we created immediately above) has value....
      // Check to see both if the left node exist and if the insert node's data is less than the comparison node's data.
        // If the above conditions are met, we should reassign the comparison node to the node on the left. 
      // If the left node does not exist, but the insert value is smaller than the current node value, we can set our insert node as the current node's left node.
      // We should then set the comparison node to null so we can get out of the loop
      //Repeat the above for the right side 
  }
}
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