// You asked for the challenge...

var input = [ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

var input2 = [ 
  [23, 55, 28, 14], 
  [12, 64, 55, 67],
  [65, 32, 26, 53],
  [70, 36, 61, 80] 
]


function skyline(arr) {
// STEPS TO SOLVING THIS PROBLEM:
// 1. Create a variable that keeps track of the sum of the buildings' increase in height. We won't be using this variable for another few steps.
// 2. Find the highest building in each row and in each column.
//    a. HINT: Keep in mind this is a SQUARE matrix. 
//    b. Create two empty arrays, one containing all the highest values in a row and which row that highest value is in, and another doing the same but for columns.
//    c. CHALLENGE: Send the highest values in a row and which row that highest value is in, and the same for columns, to the containers you made in 2.b.
//    d. If the matrix is a 4x4, each of your containers should have four arrays within, each array containing the value of the highest building, as well as the index of its row/column

// 3. Now we've set up the information in a way that lets us do the math this problem asks for. We'll need to iterate through every value in the matrix again, but this time we can COMPARE EACH value to the tallest in its respective row and column.
//    a. You may need a number of loops to solve this
//    b. Store the value your looking at as well as its tallest row and tallest column building in an array.

// 4. For each element in the matrix, compare the two values of the tallest in the row, and the tallest in the column. You should add the difference between the height of the shorter one, minus one, and the elements actual size to the final sum.

// 5. Return your tracking variable.
}


console.log(skyline(input)) //35
console.log(skyline(input2)) // 268



