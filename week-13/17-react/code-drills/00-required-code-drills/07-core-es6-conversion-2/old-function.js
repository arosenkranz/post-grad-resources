// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                    Helper Functions
//
// -------------------------------------------------------

// write a helper function for swapping two elements within an array
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// Write a sort function to sort an array in ascending order using our
// element swapper helper function
function sortAscending(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if ((j < arr.length - 1) && (arr[j+1] < arr[j])){
        swap(arr, j, j+1);
      }
    }
  }
}
// Write a sort function to sort an array in descending order using our
// element swapper helper function
function sortDescending(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if ((j < arr.length - 1) && (arr[j+1] > arr[j])){
        swap(arr, j, j+1);
      }
    }
  }
}


// -------------------------------------------------------
//                     Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // seperate out the even and odd numbers into two arrays;
  var evenArr = [];
  var oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    } else {
      oddArr.push(arr[i]);
    }
  }
  // sort the even array in ascending order
  sortAscending(evenArr);
  // sort the odd array in descending order
  sortDescending(oddArr);
  // concatenate the odd array to the back of the even array and
  // return the result
  return evenArr.concat(oddArr);
}
