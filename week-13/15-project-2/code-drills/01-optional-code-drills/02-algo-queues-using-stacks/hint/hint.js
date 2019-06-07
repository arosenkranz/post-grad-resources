// This is a very inefficient way to create a Queue, which is why this exercise may be challenging...

// It may help to think of these as stacks of books. A stack of books is, well... a stack. When we pile one book on top of another, the first book we can take is the last one we placed. If we don't take the top book out first, the pile topples. 

// The way we want the stack of books to behave is like a queue. We want to be able to get the bottom book out. This is where the second stack comes in. Imagine we have a stack of three books, and an empty pile. To get the book at the bottom--in other words, to mimick the behavior of a queue--we need to take the top book from our first pile, and move it to our empty pile. Then we move the next book, and finally the last. We've just turned our stack upside down, which is sort of a queue. To get the value we're looking for, we just take the top book from the stack we just created, which was the book at the bottom of the other stack. Finally, we need to reverse the process and put all the remaining books back so that our queue retains FIFO behavior. 

// Obviously, this is an incredibly inefficient way of making a queue, but being able to do this demonstartes your understanding of both data structures. This is somewhat like the Hanoi Towers (look up the exercise on Google if you are unfamiliar)

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


// YOUR WORK HERE

var Queue = function() {

  this.stack1 = new Stack([1,2,3,4,5,6,7])
  this.stack2 = new Stack([])

  this.add = function() {

  }


  this.remove = function() {



  }

  this.peek = function() {

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