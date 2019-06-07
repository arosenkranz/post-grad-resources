var Stack = require("./Stack.js");

var test = new Stack();

console.log("========== Test 1 ==========");
// Should be true
console.log(test.peek() === null);
// Should be true
console.log(test.pop() === null);

console.log("========== Test 2 ==========");
test.push(5);
// Should be true
console.log(test.peek() === 5);

test.push(9);
// Should be true
console.log(test.peek() === 9);

test.push(11);
// Should be true
console.log(test.peek() === 11);


console.log("========== Test 3 ==========");
// Should be true
console.log(test.pop() === 11);
// Should be true
console.log(test.pop() === 9);
// Should be true
console.log(test.pop() === 5);
// Should be true
console.log(test.pop() === null);
