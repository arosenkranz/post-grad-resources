// Creates the Stack for use later

var Stack = function(){
  
  this.items = [];

  // Push, Pop, Peek 
  this.push = function(element) {
    this.items.push(element);
  }

  this.pop = function() {
    return this.items.pop();
  }

  this.peek = function() {
    return this.items[this.items.length - 1];
  }

  this.isEmpty = function() {
    return this.items.length === 0;
  }

  this.clear = function() {
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