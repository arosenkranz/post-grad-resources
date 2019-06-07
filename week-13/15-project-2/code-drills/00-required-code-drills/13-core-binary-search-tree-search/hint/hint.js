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
  // YOUR WORK HERE
  // Important steps to completing this function:
  // 1. Keep track of the original value passed to this function
  // 2. Creat a variable to compare against the given one. It should be initialized to the root node. 
  // 3. Create a loop that lasts as long as the above variable has value. If we hit an empty node, we'll know the tree does not contain that value.
  // 4. If our value is equal to the value of the node we're comparing against, we should return that node.
  // 5. If the value is smaller than the value we're comparing against, then we should change our comparison value to it's left node
  // 6. We'll do the opposite for the right node.
  // 7. If the left or right value is null, we'll exit our loop. In that case, we should return null because we never found our node. 
 

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
console.log(tree.search(0))

console.log(tree.search(220))