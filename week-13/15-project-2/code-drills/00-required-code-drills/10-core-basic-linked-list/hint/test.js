var LinkedList = require("./LinkedList.js")


console.log("========== Test 1 ==========")
var test1 = new LinkedList()
// should be null
console.log(test1.getListHead())
// should be null
console.log(test1.getListTail())
// should be 0
console.log(test1.getListLength())


console.log("========== Test 2 ==========")
var test2 = new LinkedList(3)
// should be 3
console.log(test2.getListHead().getValue())
// should be true
console.log(test2.getListTail() === test2.getListHead())
// should be 1
console.log(test2.getListLength())


console.log("========== Test 3 ==========")
// Make sure your `insertAtHead` method is returning `this`
// to make this method chain work
//
// should be 1
console.log(test1.insertAtHead(1).getListHead().getValue())
// should be true
console.log(test1.getListTail() === test1.getListHead())
// should be 1
console.log(test1.getListLength())


console.log("========== Test 4 ==========")
test1 = new LinkedList();
// Make sure your `insertAtTail` method is returning `this`
// to make this method chain work
//
// should be 5
console.log(test1.insertAtTail(5).getListTail().getValue())
// should be true
console.log(test1.getListHead() === test1.getListTail())
// should be 1
console.log(test1.getListLength())


console.log("========== Test 5 ==========")
// should be 4
console.log(test1.insertAtHead(4).getListHead().getValue())
// should be true
console.log(test1.getListHead() !== test1.getListTail())
// should be 2
console.log(test1.getListLength())


function displayList(list) {
  var currNode = list.getListHead();
  var output = "";
  while(currNode !== null) {
    output += currNode.getValue() + " ";
    currNode = currNode.getNext();
  }
  return output;
}
console.log("========== Test 6 ==========")
test1 = new LinkedList();
for (var i = 0; i < 10; i++) {
  i%2 === 0 ? test1.insertAtHead(i) : test1.insertAtTail(i)
}
// Should be 8 6 4 2 0 1 3 5 7 9
console.log(displayList(test1))

