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

// Your work here



var s = new Stack()

console.log(s.peek())
s.add(8)
console.log(s.peek())