// Divisors within an array


// This function takes in an array and returns true if any element is evenly divisible 
// by another element and false otherwise

function checkDivisors(arr) {

  // ---------- Your Code Here ----------

  // iterate through the array

  
    
    // store the current element into a variable

    

    // for each element within the array, check it against every other element of the array

    

      // store the current element of this nested iteration into a variable

      
      
      // make sure we are not looking at the same element (i and j)
      // and that the current element of the outside iteration is evenly divisible 
      // by the current element of the nested iteration

      

        // if both are true, return true

        

  // otherwise, after we've iterated through the entire array, since
  // we haven't broken out of the function by returning true, return false.
  // hitting this line means we've iterated through the entire array without
  // finding any evenly divisible numbers

  

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