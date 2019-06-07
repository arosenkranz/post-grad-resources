// Odd ones out


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

// This helper function takes in two numbers and returns a negative if the
// first number should come before the second and a positive if the second
// number comes before the first in our sorted array

// Think of this function as telling the `sort` method what num1-num2 would be
// in terms of sorting our array
function compare(num1, num2) {
  var even1 = (num1 % 2 === 0);
  var even2 = (num2 % 2 === 0);
  // if num1 is even and num2 is odd, it comes before num2
  if (even1 && !even2) {
    return -1;
  // if num1 is odd and num2 is even, it comes after num2
  } else if (!even1 && even2) {
    return 1;
  // if num1 and num2 are both even, the smaller number comes first
  } else if (even1 && even2) {
    return (even1 - even2);
  // if num1 and num2 are both odd, the larger number comes first
  } else {
    return (even2 - even1)
  }

}



// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------

  return arr.sort(compare);

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