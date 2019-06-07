spiralIter = require("./challenge-prompt.js");



// This helper function returns true if two arrays contain the same elements and
// false otherwise. We will be using it in the test to check for 
function equalArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  var differences = arr1.filter((elem, i) => (arr2[i] !== elem ));
  return differences.length === 0;
}

// ------------------------------------------------------------------
console.log("\n==================== Test 01 ====================");
var matrix = [[ 1,  2,  3,  4,  5],
              [16, 17, 18, 19,  6],
              [15, 24, 25, 20,  7],
              [14, 23, 22, 21,  8],
              [13, 12, 11, 10,  9]];
var answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 02 ====================");
var matrix = [[1, 1, 1, 1, 1],
              [1, 2, 2, 2, 1],
              [1, 2, 3, 2, 1],
              [1, 2, 2, 2, 1],
              [1, 1, 1, 1, 1]];
var answer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}


// ------------------------------------------------------------------
console.log("\n==================== Test 03 ====================");
var matrix = [[ 1,  2,  3,  4,  5]]
var answer = [1, 2, 3, 4, 5];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 04 ====================");
var matrix = [[1],
              [2],
              [3],
              [4],
              [5]];
var answer = [1, 2, 3, 4, 5];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 05 ====================");
var matrix = [[1, 2],
              [3, 4]];
var answer = [1, 2, 4, 3];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 06 ====================");
var matrix = [[1]];
var answer = [1];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 07 ====================");
var matrix = [[],[],[],[],[]];
var answer = [];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}

// ------------------------------------------------------------------
console.log("\n==================== Test 08 ====================");
var matrix = [];
var answer = [];
var userAns = spiralIter(matrix);
console.log("Testing with matrix: ");
console.log("[");
for (var i = 0; i < matrix.length; i++) {
  console.log("["+matrix[i].join(" ")+"]")
}
console.log("]");
if (equalArr(answer, userAns)) console.log("Test passed.");
else {
  console.log("Test failed.");
  console.log("Expected: ");
  console.log("["+answer.join(" ")+"]");
  console.log("Received: ");
  console.log("["+userAns.join(" ")+"]");
  console.log("");
}
