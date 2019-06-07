// Parenthesis Matcher



// `matchParenthesis` takes in a string and the index of an opening parenthesis and returns the index of the parenthesis that corresponds to the parenthesis given
const matchParenthesis = (str, index) => {
  // -------------------- Your Code Here --------------------
  // If the character at the given index isn't an opening parenthesis, return null

  
  // Create an array to use as a stack for keeping track of any nested parenthesis

  
  // Iterate through the string starting from the character after the given index

  
    // If the current character is an opening parenthesis, push it into the stack

    
    // If the current character is a closing parenthesis

    
      // And the stack keeping track of nested parentheticals is empty, return the current index

      
      // If the stack isn't empty, just pop the last element out of the stack

      
  // If we've iterated through the entire string without finding a matching parenthesis, return null

  
  // --------------------- End Code Area --------------------
}


// Tests
// All tests should console log `true`
var test = "apple (banana grape (pineapple)) orange";
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(matchParenthesis(test, 2) === null);

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(matchParenthesis(test, 20) === 30);

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(matchParenthesis(test, 6) === 31);

// ------------------------------------------------------------
test = "apple (banana grape (pineapple) orange";
console.log("==================== Test 4 ====================");
console.log(matchParenthesis(test, 6) === null);
