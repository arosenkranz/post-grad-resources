// Convert to Binary


// `toBinary` takes in a positive integer and returns its binary representation as a string
function toBinary(num) {
  // -------------------- Your Code Here --------------------
  // Instantiate the string representation as an empty string

  
  // while the number is greater than zero

  
    // take the remainder of the number divided by 2 and prepend it to the binary representation

    
    // take the quotient of the number divided by 2 and store it as the new number since we're moving past the current power of two

    
  // Return the binary representation of the number
  // If the representation is falsy, then it's still an empty string because the number was less than 0, so we should return "0" instead of an empty string

  
  // -------------------- End Code Area ---------------------
}

console.log("========== Test ==========");
// Should be true
console.log(toBinary(0) === "0");
// Should be true
console.log(toBinary(1) === "1");
// Should be true
console.log(toBinary(43) === "101011");
// Should be true
console.log(toBinary(16) === "10000");
