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




function weave(q1, q2) {
   var newQueue = new Queue()


  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      newQueue.add(q1.remove())
    }
    if (q2.peek()) {
      newQueue.add(q2.remove())
    }

  }


  return newQueue
}

var one = new Queue ([1,3,5,7])
var two = new Queue ([2,4,6,8,10,12,14])
console.log(weave(one, two))