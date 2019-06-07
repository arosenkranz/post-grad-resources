// Largest Number in a Stack


// Stack Class
class Stack {
  constructor() {
    // -------------------- Your Code Here --------------------
    // Instantiate two arrays, one to keep track of the stack and one to keep track of the current maximum number and all the previous maximum numbers
    this.stack = [];
    this.max = [];
    // --------------------- End Code Area --------------------
  }

  // Inserts the given value into the stack
  push(value) {
    // -------------------- Your Code Here --------------------
    // Push the value into the stack
    this.stack.push(value);
    // If the maximum value stack is empty or the value is larger than the top element of the maximum element stack, put the value into that stack
    if (this.max.length === 0 || value >= this.max[this.max.length - 1])
      this.max.push(value);
    // --------------------- End Code Area --------------------
  }

  // Returns the top element of the stack without removing it
  peek() {
    // -------------------- Your Code Here --------------------
    return this.stack[this.stack.length - 1];
    // --------------------- End Code Area --------------------
  }

  // Removes and returns the top element of the stack
  pop() {
    // -------------------- Your Code Here --------------------
    // Pop the top element of the stack
    const elem = this.stack.pop();
    // If the element is the current maximum, pop it out of the maximum value stack
    if (elem === this.max[this.max.length - 1])
      this.max.pop();
    // Return the popped element
    return elem;
    // --------------------- End Code Area --------------------
  }

  // Returns the largest value within the stack without removing it
  getMax() {
    // -------------------- Your Code Here --------------------
    // Return the top element of the maximum value stack
    return this.max[this.max.length - 1]
    // --------------------- End Code Area --------------------
  }
}


// Tests
// All tests should console log `true`
//
const test = new Stack();
test.push(1)
test.push(3)
test.push(5)
test.push(2)
test.push(4)
test.push(10)
test.push(7)
test.push(13)
test.push(15)
test.push(4)
test.push(3)

// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(test.getMax() === 15);

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
test.pop();
console.log(test.getMax() === 15);

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
test.pop();
test.pop();
console.log(test.getMax() === 13);

// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
test.pop();
test.pop();
test.pop();
console.log(test.getMax() === 5);
