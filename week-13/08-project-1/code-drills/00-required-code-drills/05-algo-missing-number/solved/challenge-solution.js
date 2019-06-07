console.log("////////////////////////////// QUESTION 5.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// you have a unsorted array with just ONE missing number, build a function that returns what the missing number is


function missingNumber(arr){
    // =========== code starts here =============
    var lengthPlus = arr.length+1, 
    sum = 0,
    expectedSum = lengthPlus * (lengthPlus + 1)/2;
    
    for(var i = 0, len = arr.length; i < len; i++){
      sum += arr[i];
    }
    
    return expectedSum - sum;
    // =========== code ends here ==============
  }
  


missingNumber([5, 2, 4, 6, 1, 3, 8]);