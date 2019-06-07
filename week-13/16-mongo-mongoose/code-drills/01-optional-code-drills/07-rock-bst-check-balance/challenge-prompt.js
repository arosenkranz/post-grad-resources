// Checking the balance of a binary search tree


// BST Node Constructor
function Node(value = null){
  this.value = value;
  this.left = null;
  this.right = null;
}

// BST Constructor
function BST(){
  this.root = null;
  this.insert = function(node) {
    if (this.root === null) {
      this.root = node;
      return this;
    }
    var currNode = this.root;
    while (true) {
      if (node.value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = node;
          return this;
        } else
          currNode = currNode.right;
      } else if (node.value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = node;
          return this;
        } else
          currNode = currNode.left;
      } else
        return this;
    }
  }
}



//---------------------------------------------------------
//                     Helper Functions
//
// -------------------- Your Code Here --------------------





// -------------------- End Code Area ---------------------


// This function checks whether the current binary search tree is balanced.
BST.prototype.checkBalance = function() {
  // -------------------- Your Code Here --------------------

  
  
  

  // -------------------- End Code Area ---------------------
}

// Tests
// All tests should be true
console.log("========== Test 1 ==========")
var test = new BST();
console.log(test.checkBalance());

console.log("========== Test 2 ==========")
test.insert(new Node(10))
console.log(test.checkBalance());

console.log("========== Test 3 ==========")
test.insert(new Node(5))
test.insert(new Node(2))
console.log(test.checkBalance() === false);

console.log("========== Test 4 ==========")
test.insert(new Node(15))
test.insert(new Node(7))
console.log(test.checkBalance());

console.log("========== Test 5 ==========")
test.insert(new Node(18))
test.insert(new Node(20))
console.log(test.checkBalance() === false);

console.log("========== Test 6 ==========")
test = new BST();
test.insert(new Node(20))
test.insert(new Node(5))
test.insert(new Node(3))
test.insert(new Node(4))
test.insert(new Node(1))
test.insert(new Node(2))
test.insert(new Node(12))
test.insert(new Node(9))
test.insert(new Node(17))
test.insert(new Node(7))
test.insert(new Node(10))
test.insert(new Node(13))
test.insert(new Node(18))
// These two nodes extend 2 past the shorted branch which terminates at `4`
test.insert(new Node(6))
test.insert(new Node(8))
//
test.insert(new Node(40))
test.insert(new Node(30))
test.insert(new Node(50))
test.insert(new Node(25))
test.insert(new Node(35))
test.insert(new Node(45))
test.insert(new Node(55))
console.log(test.checkBalance() === false)