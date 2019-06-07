// Sum Check


// `sumCheck` takes in a positive integer and an array of positive integers
// and returns true if two integers within the array add up to be the first argument
const sumCheck = (num, arr) => {
  // -------------------- Your Code Here --------------------
  // Create an object that will track the numbers we've seen so far
  const encounteredNums = {};
  // Iterate through the array
  for (let i=0; i<arr.length; i++) {
    let currElem = arr[i];
    // If the current element is less than the target number
    if (currElem < num) {
      // And we've already encountered the number that would add up to the target number with it, return true
      if (encounteredNums[num - currElem]) return true;
      // Otherwise, store the element into the object
      else encounteredNums[currElem] = true;
    }
  }
  // If we've iterated through the entire array without encountering a valid pair, return false
  return false;
  // --------------------- End Code Area --------------------
}

// Tests
// All tests should console log `true`
//
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(sumCheck(6, [1, 3, 4, 9, 6, 2]));

// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(sumCheck(8, [1, 3, 4, 9, 2]) === false);

// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(sumCheck(6, [3, 4, 9, 3]));
