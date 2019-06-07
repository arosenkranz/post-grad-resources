// Bracket Checker


// `checkBracket` takes in a string and returns whether the configuration of brackets within that string is valid
const checkBracket = (str) => {
  // -------------------- Your Code Here --------------------
  // Create an object of the opening parenthesis associated with their corresponding closing parenthesis
  // We will be using this to check whether a character is a opening bracket and find the corresponding closing bracket
  const opening = {
    "{": "}",
    "(": ")",
    "[": "]"
  }
  // Create an object of the closing parenthesis associated with their corresponding opening parenthesis
  // We will be using this to check whether a character is a closing bracket 
  const closing = {
    "}": "{",
    ")": "(",
    "]": "["
  }
  // Create an array to use as a stack to keep track of the brackets we've encountered
  const bracketStack = [];
  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if the current character is an opening bracket
    if (opening[char]) {
      // push its corresponding closing bracket into the bracket stack
      bracketStack.push(opening[char]);
    // Otherwise, if the current character is a closing bracket
    } else if (closing[char]) {
      // If there's no opening brackets in the bracket stack or if the current bracket does not match the top bracket of the bracket stack
      // return false
      if (bracketStack.length === 0 ||
          bracketStack[bracketStack.length-1] !== char)
        return false;
      // Otherwise, if the current bracket is equal to the top bracket of the stack, pop the top bracket out
      else bracketStack.pop();
    }
  }
  // If the stack is empty, return true
  // otherwise, return false
  return bracketStack.length === 0;  
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
