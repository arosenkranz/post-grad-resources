// Bracket Checker


// `checkBracket` takes in a string and returns whether the configuration of brackets within that string is valid
const checkBracket = (str) => {
  // -------------------- Your Code Here --------------------
  // Create an object of the opening parenthesis associated with their corresponding closing parenthesis
  // We will be using this to check whether a character is a opening bracket and find the corresponding closing bracket

  

  // Create an object of the closing parenthesis associated with their corresponding opening parenthesis
  // We will be using this to check whether a character is a closing bracket 

  

  // Create an array to use as a stack to keep track of the brackets we've encountered

  
  // Iterate through the string

  
    // if the current character is an opening bracket

    
      // push its corresponding closing bracket into the bracket stack

      
    // Otherwise, if the current character is a closing bracket

    
      // If there's no opening brackets in the bracket stack or if the current bracket does not match the top bracket of the bracket stack
      // return false

      
      // Otherwise, if the current bracket is equal to the top bracket of the stack, pop the top bracket out

      

  // If the stack is empty, return true
  // otherwise, return false

  
  // --------------------- End Code Area --------------------
}


// Tests
// All tests should console log `true`
var test = "{}ja(jd)a[jid(ajd{bofd{(d)}jqd}gf)]";
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(checkBracket(test));

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(checkBracket("{}()[]"));

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(checkBracket("}{") === false);

// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
console.log(checkBracket("[(])") === false);
