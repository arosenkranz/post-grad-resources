// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                     Helper Functions
//
// -------------------- Your Code Here --------------------

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const sortAscending = arr => {
  arr.forEach(outer => {
    arr.forEach((elem, i) => {
      if ((i < arr.length - 1) && (arr[i+1] < arr[i])) {
        swap(arr, i, i+1);
      }
    })
  })
}

const sortDescending = arr => {
  arr.forEach(outer => {
    arr.forEach((elem, i) => {
      if ((i < arr.length - 1) && (arr[i+1] > arr[i])) {
        swap(arr, i, i+1);
      }
    })
  })
}

// --------------------- End Code Area --------------------



// -------------------------------------------------------
//                     Sort Function
//
// -------------------- Your Code Here --------------------

const upDownSort = arr => {
  let evenArr = [];
  let oddArr = [];
  arr.forEach(elem => {
    if (elem % 2 === 0)
      evenArr = [...evenArr, elem];
    else
      oddArr = [...oddArr, elem];
  })
  sortAscending(evenArr);
  sortDescending(oddArr);
  return [...evenArr, ...oddArr];
}

// --------------------- End Code Area --------------------


module.exports = upDownSort;