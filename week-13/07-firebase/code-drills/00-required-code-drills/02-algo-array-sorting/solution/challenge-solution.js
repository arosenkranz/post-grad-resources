// Odd ones out


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

// write a helper function for swapping two elements within an array
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// Write a sort function to sort an array in ascending order using our
// element swapper helper function
function sortAscending(arr) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i+1] < arr[i]){
        swap(arr, i, i+1);
        swapped = true;
      }
    }
  } while (swapped);
}

// Write a sort function to sort an array in descending order using our
// element swapper helper function
function sortDescending(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < (arr.length - 1) - i; j++) {
      if (arr[j+1] > arr[j]){
        swap(arr, j, j+1);
      }
    }
  }
}

// --------------------- End Code Area --------------------



// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------

  // seperate out the even and odd numbers into two arrays;
  var evenArr = [];
  var oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i])
    } else {
      oddArr.push(arr[i])
    }
  }

  // sort the even array in ascending order
  sortAscending(evenArr);

  // sort the odd array in descending order
  sortDescending(oddArr);

  // concatenate the odd array to the back of the even array and
  // return the result
  return evenArr.concat(oddArr)

  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));