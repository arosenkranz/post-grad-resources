LinkedList = require("./AdvancedLinkedList.js");


function displayList(list) {
  var currNode = list.getListHead();
  var output = "";
  while(currNode !== null) {
    output += currNode.getValue() + " ";
    currNode = currNode.getNext();
  }
  return output;
}
test = new LinkedList();
for (var i=1; i<=10; i++) {
  test.insertAtTail(i);
}
console.log(displayList(test));


console.log("========== Test 1 ==========");
// Should be true
console.log(test.find(4).getNext().getValue() === 5);
// Should be true
console.log(test.find(20) === null);
// Should be true
console.log(test.find(1) === test.getListHead());
// Should be true
console.log(test.find(10) === test.getListTail());


console.log("========== Test 2 ==========");
var target = test.find(5);
test.insertAfter(6.5, target);
// Should be true
console.log(displayList(test) === "1 2 3 4 5 6.5 6 7 8 9 10 ");

test.insertAfter(1.5, test.getListHead());
// Should be true
console.log(displayList(test) === "1 1.5 2 3 4 5 6.5 6 7 8 9 10 ");

test.insertAfter(10.5, test.getListTail());
// Should be true
console.log(displayList(test) === "1 1.5 2 3 4 5 6.5 6 7 8 9 10 10.5 ");


console.log("========== Test 3 ==========");
var target = test.find(8);
test.insertBefore(7.5, target);
// Should be true
console.log(displayList(test) === "1 1.5 2 3 4 5 6.5 6 7 7.5 8 9 10 10.5 ");

test.insertBefore(.5, test.getListHead());
// Should be true
console.log(displayList(test) === "0.5 1 1.5 2 3 4 5 6.5 6 7 7.5 8 9 10 10.5 ");

test.insertBefore(10.25, test.getListTail());
// Should be true
console.log(displayList(test) === "0.5 1 1.5 2 3 4 5 6.5 6 7 7.5 8 9 10 10.25 10.5 ");

console.log("========== Test 4 ==========");
// Should be true
console.log(test.delete(3).getValue() === 3);
// Should be true
console.log(displayList(test) === "0.5 1 1.5 2 4 5 6.5 6 7 7.5 8 9 10 10.25 10.5 ");
// Should be true
console.log(test.delete(99) === null);
// Should be true
console.log(displayList(test) === "0.5 1 1.5 2 4 5 6.5 6 7 7.5 8 9 10 10.25 10.5 ");


console.log("========== Test 4 ==========");
test.delete(0.5);
// Should be true
console.log(test.getListHead().getValue() === 1);

test.delete(10.5);
// Should be true
console.log(test.getListTail().getValue() === 10.25);

test = new LinkedList(5);
test.delete(5);
// Should be true
console.log(test.getListTail() === null);
// Should be true
console.log(test.getListHead() === null);