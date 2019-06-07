var {LinkedList, Node} = require("./LinkedList.js");

console.log("========== Test 1 ==========");
var test = new LinkedList();
var loopNode = new Node(5);
test.insertAtHead(loopNode);
test.insertAtHead(new Node(4));
test.insertAtHead(new Node(3));
test.insertAtHead(new Node(2));
loopNode.next = test.head;
test.insertAtHead(new Node(1));
console.log(test.checkLoop() === true);

console.log("========== Test 2 ==========");
var test = new LinkedList();
test.insertAtHead(new Node(5));
test.insertAtHead(new Node(4));
test.insertAtHead(new Node(3));
test.insertAtHead(new Node(2));
test.insertAtHead(new Node(1));
console.log(test.checkLoop() === false);