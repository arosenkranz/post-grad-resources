// Rotation Index



// `rotIndex` takes in an array of integers where if the front part was appended to the
// back part, it would be a sorted array and returns the index of where the split happens
function rotIndex(arr) {
  // -------------------- Your Code Here --------------------
  if (arr[0] < arr[arr.length - 1]){
    return 0;
  }
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] > arr[i] && arr[i + 1] >= arr[i]) {
      return i;
    }
  }
  return i;
  // --------------------- End Code Area --------------------
}

// exporting the function for the test file
module.exports = rotIndex;
