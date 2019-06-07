// Reverse Linked List

// Node constructor
function Node(value = null) {
  this.value = value;
  this.next = null;
}

// Linked List constructor
function LinkedList() {
  this.head = null;

  // Insert a node at the head of the list.
  this.insertAtHead = function(node) {
    node.next = this.head;
    this.head = node;
  }

  // Reverse the linked list
  this.reverse = function() {
    // -------------------- Your Code Here --------------------
    // Initialize the current node to be the head of the list

    
    // Initialize the previous node as null

    
    // While the currentNode isn't while (we haven't reached the tail of the list)

    
      // Temporarily store the next node in the list

      
      // Set the next pointer of the current node to be the previous node

      
      // Set the previous node variable to point to the current node

      
      // Set the next node in the list to be the current node

      
    // Set the head to be the last non-null node in the list


    // Return `this` for easy method chaining

    
  // -------------------- End Code Area ---------------------
  }
  
}


// -------------------- Tests --------------------

console.log("========== Test 1 ==========")
var test = createList(5)
test.reverse()
// Should be true
console.log(displayList(test) === "5 4 3 2 1 ")

console.log("========== Test 2 ==========")
test = createList(1)
test.reverse()
// Should be true
console.log(displayList(test) === "1 ")

console.log("========== Test 3 ==========")
test = createList(0)
test.reverse()
// Should be true
console.log(displayList(test) === "")

console.log("========== Test 4 ==========")
test = createList(11)
test.reverse()
// Should be true
console.log(displayList(test) === "11 10 9 8 7 6 5 4 3 2 1 ")




function displayList(list) {
  var currNode = list.head;
  var output = "";
  while(currNode !== null) {
    output += currNode.value + " ";
    currNode = currNode.next;
  }
  return output;
}

function createList(n) {
  var list = new LinkedList();
  for (var i=n; i>0; i--) {
    list.insertAtHead(new Node(i))
  }
  return list;
}

