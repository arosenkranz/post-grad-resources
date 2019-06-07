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

  // Create an array to store the nodes we still have to look at
  // We will be using it as a stack, pushing new nodes in and popping nodes out
  
  
  // We need to know the maximum and minimum value each node can be, so we will be storing those three values inside an object to eventually put into our array
  // Instantiate the first object to be the root of the tree and set the min and the max to be null. We can't set the min and the max to actual numbers because we don't actually know what values the tree contains, so we will have to handle this inside our logic
  
  

  // If the tree's root isn't null, put the first node object into the array
  
  

  // While there are still objects inside the validation array
  
  
    // Pop the last value of the array out. This object will be the current node we're looking at
    
    

    // If the max value exists and is less than the value of the node, this isn't a valid binary search tree, so return false
    
    

    // If the min value exists and is greater than the value of the node, this isn't a valid binary search tree, so return false
    
    


    // If the current Node has a left side child
    
    
      // If the left child has a greater value than the current node, this isn't a valid binary search tree, so return false
      
      
      // Otherwise, create a new object with the same min, the value of the current node as the new max, and the left child as the node to validate
      
      


    // If the current Node has a right side child
    
    
      // If the right child has a smaller value than the current node, this isn't a valid binary search tree, so return false
      
      
      // Otherwise, create a new object with the value of the current node as the new min, the same max, and the left child as the node to validate
      



  // After you're finished checking all the nodes, return true because if one of the tests had failed, it would have already returned false


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
