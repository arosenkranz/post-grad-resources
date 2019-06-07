// This is very similar to the queue from two stacks exercise. This one is actually even a bit more straightforward.

// Keep in mind, if we move every entry to the other queue similar to what happened in the stack exercise, we'll just get the exact same queue. Every element we added to our stack, is also the first element out of the queue. 

// If we add an element to an empty queue, it becomes the first element in the queue, in other words, the first one out...

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

  this.queue1 = new Queue([1,2,3,4,5,6,7])
  
  this.add = function() {

  }


  this.remove = function() {



  }

  this.peek = function() {

  }
}

var s = new Stack()

console.log(s.peek())
s.add(8)
console.log(s.peek())