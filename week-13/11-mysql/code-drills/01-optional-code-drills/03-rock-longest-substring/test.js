longestSubstring = require("./challenge-prompt.js");


// ------------------------------------------------------------------
console.log("\n==================== Test 01 ====================");
console.log("\nThe following should be \"abcd\":");
console.log(longestSubstring("abcdabc"));

// ------------------------------------------------------------------
console.log("\n==================== Test 02 ====================");
console.log("\nThe following should be \"f\":");
console.log(longestSubstring("ffffffff"));

// ------------------------------------------------------------------
console.log("\n==================== Test 03 ====================");
console.log("\nThe following should be \"abcdefg\":");
console.log(longestSubstring("abcdefg"));

// ------------------------------------------------------------------
console.log("\n==================== Test 04 ====================");
console.log("\nThe following should be \"abcd\":");
console.log(longestSubstring("yzaabcd"));
