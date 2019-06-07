var Queue = function(data = []) {
  
  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
   return this.data.shift()
  }

  this.peek = function() {
    return this.data[0]
  }

}


var Stack = function() {
  // Unlike the queue from two stack exercise, we only need to instantiate one queue for now.
  this.q1 = new Queue([1,2,3,4,5,6,7])
  

  this.add = function(record) {
  //Instantiate empty queue here.  
  var q2 = new Queue([])    
  // Add the new entry to the front of the new queue
  q2.add(record)
  // Then add all the entries from the populated queue after the new entry
  while (this.q1.peek()) {
    q2.add(this.q1.remove())
  }
  // q2 is essentially an updated version of q1, so we can assign q1 the value of q2
  this.q1 = q2
  }

  this.remove = function() {
    //  This works because of the way we configured add
    return this.q1.remove()
  }

  this.peek = function() {
    // Just look at the first entry in the queue.
    return this.q1.data[0]
  }
}

var s = new Stack()

console.log(s.peek())
s.add(8)
console.log(s.peek())