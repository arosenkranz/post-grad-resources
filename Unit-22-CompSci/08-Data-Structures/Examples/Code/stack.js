// Creates the Stack Class for use later
class Stack {

  constructor() {
    this.items = [];
  }

  // Push, Pop, Peek 
  push(element) {
    this.items.push(element);
  }

  pop(element) {
    this.items.pop(element);
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

}

// Creates an instance of the Stack
var newStack = new Stack();

// Starts running methods
newStack.push(1);
newStack.push(2);
newStack.push(4);

console.log(newStack.peek());
