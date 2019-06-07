// Binary Search Tree Validation


// BST Node Constructor
function Node(value = null){
  this.value = value;
  this.left = null;
  this.right = null;
}

// BST Constructor
function BST(){
  this.root = null;

  // Given a node, inserts it at the correct position within the tree
  this.insert = function(node) {
    if (this.root === null) {
      this.root = node;
      return node;
    }
    // This keeps track of the current node we're looking at
    var currNode = this.root;
    // We will be looping through this logic until the node is inserted.
    // Since we're returning the inserted node, we won't have to break the while loop since the return statement will break it for us.
    while (true) {
      // If the node we want to insert is greater than the current node we're looking at
      if (node.value > currNode.value) {
        // Check if the right hand child of the current node is empty; if it is, insert the node and return it.
        if (currNode.right === null) {
          currNode.right = node;
          return node;
        } else {
          // We set the current node to be the right hand child of the itself and go back to the start of the while loop.
          currNode = currNode.right;
        }
      } else if (node.value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = node;
          return node;
        } else {
          currNode = currNode.left;
        }
      } else {
        // If the current node has an equal value to the node to be inserted, just return the current node
        return currNode;
      }
    }
  }
}


// Validate the Binary Search Tree
BST.prototype.validate = function() {
  // -------------------- Your Code Here --------------------







  // -------------------- End Code Area ---------------------
}


// Tests
// All tests should be true
console.log("========== Test 1 ==========")
var test = new BST();
console.log(test.validate());

console.log("========== Test 2 ==========")
test.insert(new Node(10))
console.log(test.validate());

console.log("========== Test 3 ==========")
test.insert(new Node(5))
test.insert(new Node(15))
test.insert(new Node(7))
test.insert(new Node(2))
console.log(test.validate());

console.log("========== Test 4 ==========")
var brokenNode = new Node(18);
brokenNode.left = new Node(2);
brokenNode.right = new Node(20);
test.insert(brokenNode)
console.log(test.validate() === false);
