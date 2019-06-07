// Dynamic Data Analysis


// `DataTracker` returns statistical analysis on data it tracks
class DataTracker {
  constructor() {  
    // -------------------- Your Code Here --------------------

    

    
    // --------------------- End Code Area --------------------
  }

  // Insert the argument into the DataTracker
  insert(value) {
    // -------------------- Your Code Here --------------------

    

    
    // --------------------- End Code Area --------------------
  }

  // Return the arithmetic mean of the data set
  getMean() {
    // -------------------- Your Code Here --------------------
    

    
    
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
