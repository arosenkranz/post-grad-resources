var rotIndex = require("./challenge-prompt.js");

// ------------------------------------------------------------------
console.log("\n==================== Test 01 ====================");
console.log("\nThe following should print the number 5:");
var arr1 = [4, 5, 6, 7, 8, 1, 2, 3, 4];
console.log(rotIndex(arr1)); // = 5

// ------------------------------------------------------------------
console.log("\n==================== Test 02 ====================");
console.log("\nThe following should print the number 0:");
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotIndex(arr2)); // = 0

// ------------------------------------------------------------------
console.log("\n==================== Test 03 ====================");
console.log("\nThe following should be the number 3:");
var arr3 = [34, 87, 90, 5, 17, 22, 29, 31, 33];
console.log(rotIndex(arr3)); // = 3

// ------------------------------------------------------------------
console.log("\n==================== Test 04 ====================");
console.log("\nThe following should be the number 8:");
var arr4 = [34, 87, 90, 95, 117, 122, 129, 131, 3];
console.log(rotIndex(arr4)); // = 8
