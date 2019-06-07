// Merging Sorted Arrays



// The `mergeSorted` function takes in two sorted arrays and returns a new 
// sorted array containing all the elements of the two argument arrays
function mergeSorted(arr1, arr2) {

  // Declare variables for the indices we're tracking for the two arrays
  var index1 = 0;
  var index2 = 0;
  var limit1 = arr1.length - 1;
  var limit2 = arr2.length - 1;
  // Initiate an empty array for our output
  var mergedArr = [];

  // Keep iterating through the arrays until we reach the end of one of them
  while (index1 <= limit1 && index2 <= limit2){

    // If the current element of the first array is less than that of the second array
    if (arr1[index1] < arr2[index2]) {
      // Add the element from the first array into the output array and
      // increment the index for the first array
      mergedArr.push(arr1[index1]);
      index1++;
    // If the current element of the first array is not less than that of the second array
    } else {
      // Add the element from the second array into the output array and
      // increment the index for the second array
      mergedArr.push(arr2[index2]);
      index2++;
    }

  }

  // Once we've reached the end of one of the arrays, we need to add the remaining
  // elements of the other one onto the output array
  //
  // If we reached the end of the first array then add the remaining elements of the
  // second array to the output array
  if (index1 > limit1 && index2 <= limit2) {
    mergedArr = mergedArr.concat(arr2.slice(index2));
  }
  // If we reached the end of the second array then add the remaining elements of the
  // first array to the output array
  if (index2 > limit2 && index1 <= limit1) {
    mergedArr = mergedArr.concat(arr1.slice(index1));
  }

  // Return the output array
  return mergedArr;

  // --------------------- End Code Area --------------------
}

// Export the `mergedSorted` 
module.exports = mergeSorted;