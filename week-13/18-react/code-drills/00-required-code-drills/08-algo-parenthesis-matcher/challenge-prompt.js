// Parenthesis Matcher


// `matchParenthesis` takes in a string and the index of an opening parenthesis and returns the index of the parenthesis that corresponds to the parenthesis given
const matchParenthesis = (str, index) => {
  // -------------------- Your Code Here --------------------
  




  
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
