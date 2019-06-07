// Efficiency 3


// -------------------- Question 1 --------------------
//
// `evenFibonacci` takes a number and returns all the
// even numbers of the fibonacci sequence up until that
// number.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

Complexity: O(n)

Why: Even though there are two for loops each looping
through something whose size is determined by the argument,
they occur one after the other instead of nested. We drop
the coefficient in front of the `n` in time complexity,
so this function reduces down to O(n)

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

Complexity: O(n)

Why: Even though there are nested for loops, the inner for loop
iterates through a constant number of elements each time, thus
it behaves in constant time since it doesn't scale with the
size of the argument. We could have replaced it with 5 seperate
statements each adding a slightly different element to the output.

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

Complexity: O(n) or O(m * n)

Why: This function is slightly complicated and the way to represent
time complexity changes depending upon how you view the input.

If you view the entire matrix as the input, then it's in
constant time despite the nested for loops since it's only iterating
through each value once.

If you view the input as a set of `m` arrays of `n` length each,
then the time complexity of this function because O(m * n) since the
length and width of these matrixes are independent of each other.

For this function, either answer is acceptable as long as you explain
your reasoning. This will change for functions with multiple arguments.


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

Complexity: O(n * sqrt(n))

Why: We need to iterate through all the possible factors of the
number and for each of those numbers, we're checking if it's prime
first instead of after the if-statement, so the time complexity
of the for loop is O(n * sqrt(n)).

The iteration that comes afterwards is O(n) but because its a lower
order than O(n * sqrt(n)), we drop it from the representation of
time complexity.

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