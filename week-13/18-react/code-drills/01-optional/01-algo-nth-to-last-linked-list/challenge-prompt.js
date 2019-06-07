// n-th to Last Element of a Linked List

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(node) {
    node.next = this.head;
    this.head = node;
  }

  // Takes in a number `num` and returns the node that the `num`-th from the end
  // It will return the head of the list if `num` is too large
  nthFromLast(num) {
    // -------------------- Your Code Here --------------------
    // Declare a `slowNode` and set it to be the head which is going to end up being the node that we return

    
    // Declare a `fastNode` and set it to be the head
    // This pointer is going to be `num` nodes ahead of the `slowNode` so when this variable reaches the end of the linked list, `slowNode` will be pointing to the node we want to return

    
    // Using a for loop, move the `fastNode` pointer `num` nodes ahead of the slow node

    

    // Increment both the `fastNode` and the `slowNode` simultaneous until the `fastNode` reaches the end of the list and becomes null

    
    
    // Return the `slowNode`

    
    // --------------------- End Code Area --------------------
  }
}


// Tests
// All tests should console log `true`
test = new LinkedList();
test.insert(new Node(9));
test.insert(new Node(8));
test.insert(new Node(7));
test.insert(new Node(6));
test.insert(new Node(5));
test.insert(new Node(4));
test.insert(new Node(3));
test.insert(new Node(2));
test.insert(new Node(1));

// ------------------------------------------------------------
console.log("==================== Test 1 ====================")
console.log(test.nthFromLast(3).value === 7)

// ------------------------------------------------------------
console.log("==================== Test 2 ====================")
console.log(test.nthFromLast(1).value === 9)

// ------------------------------------------------------------
console.log("==================== Test 3 ====================")
console.log(test.nthFromLast(5).value === 5)
