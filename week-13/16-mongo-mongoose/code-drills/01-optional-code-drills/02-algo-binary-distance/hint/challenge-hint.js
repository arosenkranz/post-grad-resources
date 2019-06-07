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

  
  // Keep track of the current max distance

  
  // Keep track of the current distance between numbers

  
  // Iterate through the binary representation

  
    // Since we're looking for the distance between 1s in the bitwise complement, we're essentially looing for the distance between 0s in the original binary representation of the number
    // When we reach a 0 in the binary number

    
      // Set the max distance between 0s to be the higher between the current distance and the previous max distance

      
      // Reset the current distance

      
    // Increment the current distance before we move on to the next character

    
  // After we've iterated through the binary representation, return the max distance

  
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