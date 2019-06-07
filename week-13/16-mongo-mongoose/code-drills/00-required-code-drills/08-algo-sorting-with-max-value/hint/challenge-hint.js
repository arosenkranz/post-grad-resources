// Sort Scores


// Given an array where each value is between 0 and 99, `sortScores` returns a new array containing all the values sorted in ascending order
function sortScores(arr) {
  // -------------------- Your Code Here --------------------

  // Create a new array named scoresCount of length 100 where each value 0
  // The index of this new array will be the value within the argument array and the value of the array at the index will be the number of times that number appears in the argument array

  
  
  // Iterate through the argument array and increment the counter at the index equal to the value of the current element

  

  // Create a new array to keep track of the final scores and push a value equal to the index into the final array for each count for that index
  // i.e. If the value of scoresCount at index 5 was 8, then we would push 5 into the final array 8 times

  



  // Return the final scores array


  // -------------------- End Code Area ---------------------
}

// Tests
// All tests should be true
console.log("========== Test 1 ==========")
test = [84,23,43,22,11,1,54,32,54,32,56,74,8,9,30,14,32,67,80,9,56,2,29];

// should be
// [ 1,2,8,9,9,11,14,22,23,29,30,32,32,32,43,54,54,56,56,67,74,80,84 ]
console.log(sortScores(test))
