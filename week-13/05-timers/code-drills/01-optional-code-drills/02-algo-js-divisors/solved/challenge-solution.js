// Divisors within an array

// This function takes in an array and returns true if any element is evenly divisible 
// by another element and false otherwise

function checkDivisors(arr) {

  // ---------- Your Code Here ----------

  // iterate through the array
  for (var i = 0; i < arr.length; i++) {
    
    // store the current element into a variable
    var currentElem = arr[i];
    // for each element within the array, check it against every other element of the array
    for (var j = 0; j < arr.length; j++) {

      // store the current element of this nested iteration into a variable
      var innerElem = arr[j];
      // make sure we are not looking at the same element (i and j)
      // and that the current element of the outside iteration is evenly divisible 
      // by the current element of the nested iteration
      if ((i !== j) && (currentElem % innerElem === 0)) {

        // if both are true, return true
        return true

      }

    }

  }

  // otherwise, after we've iterated through the entire array, since
  // we haven't broken out of the function by returning true, return false.
  // hitting this line means we've iterated through the entire array without
  // finding any evenly divisible numbers
  return false

  // ----------- End Code Area -----------

}

// This should console log true
console.log(checkDivisors([4, 35, 3, 9, 22, 10]));

// This should console log true
console.log(checkDivisors([37, 17, 28, 7, 63]));

// This should console log true
console.log(checkDivisors([12, 27, 29, 62, 27]));

// This should console log false
console.log(checkDivisors([81, 7, 33, 20, 12]));

// This should console log false
console.log(checkDivisors([32, 15, 49, 82, 11]));