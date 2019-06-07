// Spiral iteration through a matrix


// This function takes in a `m` x `n` matrix represented as an array 
// of `m` sub-arrays, each of which contain `n` elements and returns
// all the elements of the matrix starting with the element in the
// top left and clockwise spiraling inward
function spiralIter(matrix) {
  // Initialize the return array as an empty array.
  var returnArr = [];

  // Check to make sure the matrix has entries. If it doesn't, return an empty
  // array.
  if (matrix.length <= 0 || matrix[0].length <=0) {
    return returnArr;
  }
  // We need variables to keep track of where we are inside our matrix iteration
  // We will need 4 variables, one for left bound, one for the right bound, one
  // for the top bound, and one for the bottom bound. These limits are the edges
  // of the "inner" matrix we haven't iterated through yet.
  var colStart = 0;
  var colEnd = matrix[0].length - 1;
  var rowStart = 0;
  var rowEnd = matrix.length - 1;

  // We're iterating through the matrix until the pointers we have for the edges
  // of the matrix we still have to iterate through cross over one another. That
  // would indicate we have iterated through the entire matrix. Use a while loop
  // for this.
  while (colStart <= colEnd && rowStart <= rowEnd){
    // Within each iteration of the while loop, we will be looking at the entire
    // perimeter of the sub-matrix as indicated by the bounds we'd defined. This
    // way, we're always starting in the upper left and iterating through the edge
    // of the sub-matrix before ending the iteration right below our starting
    // element.
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
    // After we've iterated through the perimeter of the sub-matrix, move the edges
    // of the matrix towards the center by incrementing the left and top bounds and
    // decrementing the right and bottom bounds
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }
  
  // After iterating through the matrix, return the array we built.
  return returnArr;
}

// This export is for testing the function
module.exports = spiralIter;