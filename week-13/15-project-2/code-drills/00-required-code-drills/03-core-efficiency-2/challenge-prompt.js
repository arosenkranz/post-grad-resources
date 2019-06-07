// Efficiency 3


// -------------------- Question 1 --------------------
//
// `evenFibonacci` takes a number and returns all the
// even numbers of the fibonacci sequence up until that
// number.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

  



    --------------- END ANSWER AREA ---------------- */
function evenFibonacci(num) {
  var fib = [];
  for (var i = 0; i < num; i++) {
    if (i <= 1) {
      fib.push(i)
    } else {
      var newFib = fib[i-2] + fib[i-1]
      fib.push(newFib);
    }
  }
  var evenFib = [];
  for (var i = 0; i < fib.length; i++) {
    if (fib[i] % 2 === 0)
      evenFib.push(fib[i]);
  }
  return evenFib;
}

// -------------------- Question 2 --------------------
//
// `doodleVowel` takes in an array of numbers as argument
// and returns a new array such that each number is appended
// to each vowel in the English alphabet.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

  



   --------------- END ANSWER AREA ---------------- */
function doodleVowel(arr) {
  var vowels = 'aeiou'
  var doodle = [];
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<vowels.length; j++) {
      doodle.push(vowels[j] + arr[i]);
    }
  }
  return doodle;
}
  


// -------------------- Question 3 --------------------
//
// This function takes in a rectangular matrix and returns
// a single array containing all the elements of the matrix 
// starting with the element in the top left and clockwise 
// spiraling inward
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------





    --------------- END ANSWER AREA ---------------- */
function spiralIter(matrix) {
  var returnArr = [];
  if (matrix.length <= 0 || matrix[0].length <=0) {
    return returnArr;
  }
  var colStart = 0;
  var colEnd = matrix[0].length - 1;
  var rowStart = 0;
  var rowEnd = matrix.length - 1;
  while (colStart <= colEnd && rowStart <= rowEnd){
    for (var col = colStart; col <= colEnd; col++){
      returnArr.push(matrix[rowStart][col]);
    }
    for (var row = rowStart + 1; row <= rowEnd; row++) {
      returnArr.push(matrix[row][colEnd]);
    }
    for (var col = colEnd - 1; col >= colStart && rowEnd !== rowStart; col--) {
      returnArr.push(matrix[rowEnd][col]);
    }
    for (var row = rowEnd - 1; row > rowStart && colEnd !== colStart; row--) {
      returnArr.push(matrix[row][colStart]);
    }
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }
  return returnArr;
}



// -------------------- Question 4 --------------------
//
// `sumPrimeFactors` takes in a number and returns the sum
// of all the prime factors of that number.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

  



    --------------- END ANSWER AREA ---------------- */
function sumPrimeFactors(num) {    
  var factors = [];
  for (var i = 2; i <= num; i++) {
    var isPrime = true;
    for (var j = 2; (j * j) <= i; j++) {
      if (i % j === 0)
        isPrime = false;
    }
    if (num % i === 0 && isPrime) {
      factors.push(i);
    }
  }
  var sum = 0;
  for (var i = 0; i < factors.length; i++) {
    sum += factors[i];
  }
  return sum;
}