// Activity 3


// This functions returns the number of differences between two strings of
// equal length
function hamming(str1, str2) {

    // -------------------- Your Code Here --------------------

    // If the strings are different lengths, return
    // "Please pass two strings of equal length to this function"

    
  
    // set a variable hamm to be 0. We will be using this variable to
    // keep track of the hamming distance

    
  
    // iterate through the strings. If the characters at the current index
    // do not match, increment the hamm counter

    

    // once we've finished iterating through the strings, return the hamm counter

    
    

    // --------------------- End Code Area --------------------

}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
console.log("The following should be 5 ");
console.log(hamming("chicken","charity"));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
console.log("The following should be 8");
console.log(hamming("48ndqw13","6543fedw"));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
console.log("The following should be \"Please pass two strings of equal length to this function\"");
console.log(hamming("dfvs1","dcdw"));