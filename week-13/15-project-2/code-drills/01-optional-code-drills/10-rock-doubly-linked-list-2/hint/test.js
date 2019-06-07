// This is object destructuring. More on this when we cover ES6
var DoublyLinkedList = require("./AdvancedDoublyLinkedList.js");


function displayList(list) {
  var currNode = list.head;
  var output = "";
  while(currNode !== null) {
    output += currNode.value + " ";
    currNode = currNode.right;
  }
  return output;
}

console.log("========== Test 1 ==========");
var test = new DoublyLinkedList();
test.insertBefore(3, test.head);
test.insertBefore(2, test.head);
test.insertBefore(1, test.head);
console.log(test.delete(test.find(2)).value === 2);
// Should be true
console.log(displayList(test) === "1 3 ");


console.log("========== Test 2 ==========");
var test = new DoublyLinkedList();
test.insertAfter(1, test.tail);
test.insertAfter(2, test.tail);
test.insertAfter(3, test.tail);
// Should be true
console.log(test.delete(test.head).value === 1);
// Should be true
console.log(displayList(test) === "2 3 ");


console.log("========== Test 3 ==========");
var test = new DoublyLinkedList();
test.insertBefore(3, test.tail);
test.insertBefore(1, test.tail);
test.insertBefore(2, test.tail);
// Should be true
console.log(test.delete(test.tail).value === 3);
// Should be true
console.log(displayList(test) === "1 2 ");