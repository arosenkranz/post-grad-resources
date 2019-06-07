var Node = require("./Node.js")

console.log("========== Test 1 ==========")
var test = new Node(12)
// should be 12
console.log(test.getValue())
// should be null
console.log(test.getNext())


console.log("========== Test 2 ==========")
var test2 = new Node()
// should be null
console.log(test2.getValue())
// should be null
console.log(test2.getNext())
test2.setValue(5)
test2.setNext(test)
// should be 5
console.log(test2.getValue())
// should be 12
console.log(test2.getNext().getValue())
