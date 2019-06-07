// Bracket Checker


// `checkBracket` takes in a string and returns whether the configuration of brackets within that string is valid
const checkBracket = (str) => {
  // -------------------- Your Code Here --------------------
  
  


  
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
