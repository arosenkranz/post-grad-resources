// Change Iteration Count


// This function takes in a positive integer as the target value in cents and an array of positive integers as the denominations of coins
// and returns the number of different combinations of coins to get the target value. Order of coins in this situation matters
function changeIterCount(value, denoms) {
  // Initialise the total count to be 0
  var total = 0;
  // Iterate through the denominations
  for (var i=0; i<denoms.length; i++) {
    // For each denomination, initialize a new value that is the current denomination subtracted from the argument value
    var currVal = value - denoms[i];
    // If the new value is greater than 0, call on `changeIterCount` to find how many different iterations is possible for the new value
    if (currVal > 0)
      total += changeIterCount(currVal, denoms);
    // If the new value is exactly 0, then increment the total by 1 because it made perfect change
    else if (currVal === 0)
      total += 1;
    // If the new value is less than 0, then don't increment the total because the current denomination is not a valid change iteration or the value
  }
  // return the total after you've finished iterating through the denominations
  return total
}

// Tests
console.log(changeIterCount(12, [2, 3]) === 12);
console.log(changeIterCount(22, [3, 8, 11]) === 13);
console.log(changeIterCount(2, [1, 2]) === 2);