mergeSorted = require("./challenge-solution.js");


// ------------------------------------------------------------------
console.log("\n==================== Test 01 ====================");
console.log("\nThe following should be [1, 1, 3, 4, 5, 5, 6, 7, 8, 10]:");
arr1 = [1,4,5,8,10];
arr2 = [1,3,5,6,7];
console.log(mergeSorted(arr1, arr2));

// ------------------------------------------------------------------
console.log("\n==================== Test 02 ====================");
console.log("\nThe following should be [2, 2, 2, 2, 3]:");
arr1 = [2,2,2,2];
arr2 = [3];
console.log(mergeSorted(arr1, arr2));

// ------------------------------------------------------------------
console.log("\n==================== Test 03 ====================");
console.log("\nThe following should be [1, 2, 3, 4, 5]:");
arr1 = [];
arr2 = [1, 2, 3, 4, 5];
console.log(mergeSorted(arr1, arr2));

// ------------------------------------------------------------------
console.log("\n==================== Test 04 ====================");
console.log("\nThe following should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:");
arr1 = [1,3,5,7,9];
arr2 = [2,4,6,8,10];
console.log(mergeSorted(arr1, arr2));