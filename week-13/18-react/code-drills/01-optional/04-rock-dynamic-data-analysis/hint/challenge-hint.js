// Dynamic Data Analysis


// `DataTracker` returns statistical analysis on data it tracks
class DataTracker {
  constructor() {  
    // -------------------- Your Code Here --------------------
    // We need an object to keep track of how many times each value has occurred

    
    // We need to keep track of how many times the current mode has occurred

    
    // Initialize an empty array to keep track of the mode

    
    // We only need to keep track of the current sum of the values and the number of values inserted in order to be able to find the mean

    
    // We need to keep track of the current min and max value

    
    // --------------------- End Code Area --------------------
  }

  // Insert the argument into the DataTracker
  insert(value) {
    // -------------------- Your Code Here --------------------
    // Increment the count of the value inside the mode object

    
    // If the new value occurs more than the previous mode

    
      // set the new value as the mode

      
      // set the count for the new value as the new mode counter

      
    // otherwise, if the counts are equal

    
      // push the value into the mode array

      
    // Increment the count of how many datapoints have been input

    
    // Increment the sum of all the datapoints by the new value

    
    // If there wasn't previously a min, set the value as the min
    // Otherwise use the smaller number between the value and the min

    
    // If there wasn't previously a max, set the value as the max
    // Otherwise use the larger number between the value and the max

    
    // --------------------- End Code Area --------------------
  }

  // Return the arithmetic mean of the data set
  getMean() {
    // -------------------- Your Code Here --------------------
    // Divide the current sum by the count of how many data points have been inserted

    
    // --------------------- End Code Area --------------------
  }

  // Return the minimum value of the data set
  getMin() {
    // -------------------- Your Code Here --------------------

    

    // --------------------- End Code Area --------------------
  }

  // Return the maximum value of the data set
  getMax() {
    // -------------------- Your Code Here --------------------

    

    // --------------------- End Code Area --------------------
  }

  // Return the mode of the data set
  getMode() {
    // -------------------- Your Code Here --------------------

    

    // --------------------- End Code Area --------------------
  }
}


// Tests
// All tests should be true
//
const arrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i=0; i<arr1.length; i++)
    if (arr1[i] !== arr2[i]) return false;
  return true;
}
const test = new DataTracker();
test.insert(5)
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(test.getMean() === 5);
console.log(test.getMax() === 5);
console.log(test.getMin() === 5);
console.log(arrEqual(test.getMode(), [5]));

test.insert(7)
// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(test.getMean() === 6);
console.log(test.getMax() === 7);
console.log(test.getMin() === 5);
console.log(arrEqual(test.getMode(), [5, 7]));

test.insert(3)
// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log(test.getMean() === 5);
console.log(test.getMax() === 7);
console.log(test.getMin() === 3);
console.log(arrEqual(test.getMode(), [5, 7, 3]));

test.insert(7)
// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
console.log(test.getMean() === 5.5);
console.log(test.getMax() === 7);
console.log(test.getMin() === 3);
console.log(arrEqual(test.getMode(), [7]));
