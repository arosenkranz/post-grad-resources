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
  // This stores the highest value in each row as well as the row it is in
  var holderX = []
  // This stores the highest value in each column as well as the column it is in
  var holderY = []

  // What we'll eventuall return
  var sum = 0;

  // In this double loop i and j will switch roles depending on wheteher we're looking for a column or a row.
  // Because j iterates fully for every i iteration, j can represent all the members of the column or row, which will be represented by i.
  for (var i = 0 ; i < arr.length ; i++) {
    // Will contain highest in row as well as its row
    var highestXInfo = []
    // Initialize to first in row
    var highestX = arr[i][0]
    // Will contain highest in column as well as its column
    var highestYInfo = []
    // initialize to first in column
    var highestY = arr[0][i]

   
    for (var j = 0 ; j < arr.length ; j++) {

      // Sends the largest row value to highestInfoX
      if (arr[i][j] >= highestX) {
        highestXInfo = []
        highestX = arr[i][j]
        highestXInfo.push(highestX, i)
      }
      // Sends the largest column value to highestInfoY
      if (arr[j][i] >= highestY) {
        highestYInfo = []
        highestY = arr[j][i]
        highestYInfo.push(highestY, i)
      }

    } 
    // Send the tallest in a given row to the container of all the tallest
    holderX.push(highestXInfo)
    // Send the tallest in a given column to the container of all the tallest
    holderY.push(highestYInfo)
  }

// Search through all the values again 
  for (var i = 0 ; i < arr.length ; i ++) {

    for (var j = 0 ; j < arr.length ; j ++) {
      
      var tallest = [arr[i][j]]
      // After getting the tallest for each row and column, we can now compare each element against those values. 
      for (var x = 0 ; x < holderX.length ; x++) {
        for (var y = 0 ; y < holderX.length ; y++) {
          // For each element, send along the tallest in their row and the tallest in their column
          if (i === holderX[x][1] && j === holderY[y][1]) {
          
            tallest.push(holderX[x][0], holderY[y][0])

          }
        }
      }

      // Only evaluate the values that need to be increased. If a value is already the tallest, it does not need to have this work done to it. 
      if (tallest.length === 3 && tallest[0] < tallest[1] && tallest[0] < tallest[2]) {
        // Initialize index 1 as the smaller value
        var smaller = tallest[1]
        // If index 2 is smaller, swap them
        if (tallest[2] <= smaller) {
          smaller = tallest[2]
        }
        // Make sure the value is smaller than the taller building
        var newHeight = smaller - 1
        // Add the difference to sum
        sum += (newHeight - arr[i][j] )
      }

    }

  }
  // Ta-Da
  return sum

}

console.log(skyline(input)) //35
console.log(skyline(input2)) // 268