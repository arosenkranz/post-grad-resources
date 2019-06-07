var Stack = function(data = []) {
 
  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
    return this.data.pop()
  }

  this.peek = function() {
    return this.data[data.length -1]
  }
}


var Queue = function() {

  // Create two dummy stacks to work with. 
  this.stack1 = new Stack([1,2,3,4,5,6,7])
  this.stack2 = new Stack([])
  // Nothing too special here, just adding an entry to the top of our "first pile of books".
  this.add = function(record) {
    this.stack1.add(record)
  }


  this.remove = function() {
    // Move all the entries to the empty stack. Stop when there's nothing when we "peek" in the first stack
    while (this.stack1.peek()) {
      this.stack2.add(this.stack1.remove())
    }
    // Store the top value on the second stack
    var record = this.stack2.remove()

    // Put the elements back in the first stack. Do so until there are no more elements in the second stack.
    while (this.stack2.peek()) {
      this.stack1.add(this.stack2.remove())
    }

    return record

  }

  this.peek = function() {
    // Same thing as above, except we're just looking rather than removing
    while (this.stack1.peek()) {
      this.stack2.add(this.stack1.remove())
    }

    var record = this.stack2.peek()

    while (this.stack2.peek()) {
      this.stack1.add(this.stack2.remove())
    }

    return record
  }
  
}


var q = new Queue()

console.log(q.peek())


console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())

q.add(11)
q.add(14)
q.add(3)
q.add(7)
console.log(q.peek())