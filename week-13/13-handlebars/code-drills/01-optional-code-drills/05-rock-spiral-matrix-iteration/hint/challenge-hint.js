// Spiral iteration through a matrix


// This function takes in a `m` x `n` matrix represented as an array 
// of `m` sub-arrays, each of which contain `n` elements and returns
// all the elements of the matrix starting with the element in the
// top left and clockwise spiraling inward
function spiralIter(matrix) {
  // -------------------- Your Code Here --------------------
  // Initialize the return array as an empty array.

  

  // Check to make sure the matrix has entries. If it doesn't, return an empty
  // array.

  

  // We need variables to keep track of where we are inside our matrix iteration
  // We will need 4 variables, one for left bound, one for the right bound, one
  // for the top bound, and one for the bottom bound. These limits are the edges
  // of the "inner" matrix we haven't iterated through yet.

  

  // We're iterating through the matrix until the pointers we have for the edges
  // of the matrix we still have to iterate through cross over one another. That
  // would indicate we have iterated through the entire matrix. Use a while loop
  // for this.

  

    // Within each iteration of the while loop, we will be looking at the entire
    // perimeter of the sub-matrix as indicated by the bounds we'd defined. This
    // way, we're always starting in the upper left and iterating through the edge
    // of the sub-matrix before ending the iteration right below our starting
    // element.

    


    // After we've iterated through the perimeter of the sub-matrix, move the edges
    // of the matrix towards the center by incrementing the left and top bounds and
    // decrementing the right and bottom bounds

    

  
  // After iterating through the matrix, return the array we built.

  
  // -------------------- End Code Area ---------------------
}

// This export is for testing the function
module.exports = spiralIter;