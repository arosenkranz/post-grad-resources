var Queue = require("./Queue.js");

var test = new Queue();

console.log("========== Test 1 ==========");
// Should be true
console.log(test.peek() === null);
// Should be true
console.log(test.dequeue() === null);

console.log("========== Test 2 ==========");
test.enqueue(5);
// Should be true
console.log(test.peek() === 5);

test.enqueue(9);
// Should be true
console.log(test.peek() === 5);

test.enqueue(11);
// Should be true
console.log(test.peek() === 5);


console.log("========== Test 3 ==========");
// Should be true
console.log(test.dequeue() === 5);
// Should be true
console.log(test.dequeue() === 9);
// Should be true
console.log(test.dequeue() === 11);
// Should be true
console.log(test.dequeue() === null);
