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