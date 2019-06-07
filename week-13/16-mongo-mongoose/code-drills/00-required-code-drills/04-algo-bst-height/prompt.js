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

  // HELPER FUNCTIONS YOU MIGHT NEED
  // YOUR WORK HERE
  

  this.height = function() {
  // YOUR WORK HERE

  }

}


// TESTS

var tree = new BST(new Node(10));

tree.insert(new Node(5));
tree.insert(new Node(15));
tree.insert(new Node(20));
tree.insert(new Node(0));
tree.insert(new Node(-5));
tree.insert(new Node(6));
tree.insert(new Node(30));
tree.insert(new Node(32));
tree.insert(new Node(26));
tree.insert(new Node(13));
tree.insert(new Node(14));

console.log("5",tree.height()) // Should be 5


tree.insert(new Node(100));
tree.insert(new Node(58));
tree.insert(new Node(68));
tree.insert(new Node(78));
tree.insert(new Node(88));
tree.insert(new Node(98));
tree.insert(new Node(97));

console.log("12",tree.height()) // Should be 12

var tree2 = new BST(new Node(10));



tree2.insert(new Node(5));
tree2.insert(new Node(15));
tree2.insert(new Node(20));
tree2.insert(new Node(0));
tree2.insert(new Node(-5));
tree2.insert(new Node(6));
tree2.insert(new Node(30));
tree2.insert(new Node(32));
tree2.insert(new Node(26));
tree2.insert(new Node(13));
tree2.insert(new Node(14));




tree2.insert(new Node(-6));
tree2.insert(new Node(-15));
tree2.insert(new Node(-20));
tree2.insert(new Node(-21));
tree2.insert(new Node(-22));
tree2.insert(new Node(-23));
tree2.insert(new Node(-30));
tree2.insert(new Node(-32));
tree2.insert(new Node(-36));
tree2.insert(new Node(-43));
tree2.insert(new Node(-54));
tree2.insert(new Node(-57));
tree2.insert(new Node(-58));
tree2.insert(new Node(-60));
tree2.insert(new Node(-70));

console.log("19",tree2.height()) // Should be 19

var tree3 = new BST(new Node(10));



tree3.insert(new Node(5));
tree3.insert(new Node(15));
tree3.insert(new Node(20));
tree3.insert(new Node(0));
tree3.insert(new Node(-5));
tree3.insert(new Node(6));
tree3.insert(new Node(30));
tree3.insert(new Node(32));
tree3.insert(new Node(26));
tree3.insert(new Node(13));
tree3.insert(new Node(14));

tree3.insert(new Node(50));
tree3.insert(new Node(150));
tree3.insert(new Node(-20));
tree3.insert(new Node(-110));
tree3.insert(new Node(-58));
tree3.insert(new Node(80));
tree3.insert(new Node(40));
tree3.insert(new Node(-320));
tree3.insert(new Node(260));
tree3.insert(new Node(-130));
tree3.insert(new Node(160));

console.log("9",tree3.height()) // Should be 9