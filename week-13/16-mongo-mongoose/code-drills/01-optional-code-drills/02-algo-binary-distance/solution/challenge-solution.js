// Binary Distance


//---------------------------------------------------------
//                     Helper Functions
//
// -------------------- Your Code Here --------------------

// `toBinary` takes in a positive integer and returns its binary representation as a string
function toBinary(num) {
  var bin = "";
  while (num > 0) {
    bin = num%2 + bin;
    num = Math.floor(num/2);
  }
  return bin ? bin : "0";
}

// -------------------- End Code Area ---------------------


// `binaryDistance` takes in a positive integer as an argument and returns the maximum distance between 1s in the bitwise complement of the binary representation of that number
function binaryDistance(num) {
  // -------------------- Your Code Here --------------------
  // Convert the number to binary
  var binaryNum = toBinary(num);
  // Keep track of the current max distance
  var maxDistance = 0;
  // Keep track of the current distance between numbers
  var currDistance = 0;
  // Iterate through the binary representation
  for (var i=0; i<binaryNum.length; i++) {
    // Since we're looking for the distance between 1s in the bitwise complement, we're essentially looing for the distance between 0s in the original binary representation of the number
    // When we reach a 0 in the binary number
    if (binaryNum[i] === "0") {
      // Set the max distance between 0s to be the higher between the current distance and the previous max distance
      maxDistance = Math.max(maxDistance, currDistance);
      // Reset the current distance
      currDistance = 0;
    }
    // Increment the current distance before we move on to the next character
    currDistance++;
  }
  // After we've iterated through the binary representation, return the max distance
  return maxDistance;
  // -------------------- End Code Area ---------------------
}

console.log("========== Test ==========");
// Should be true
console.log(binaryDistance(46) == 4)
// Should be true
console.log(binaryDistance(3) == 0);
// Should be true
console.log(binaryDistance(4325234) == 10);
// Should be true
console.log(binaryDistance(8) == 1);