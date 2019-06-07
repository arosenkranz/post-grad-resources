// Dynamic Data Analysis


// `DataTracker` returns statistical analysis on data it tracks
class DataTracker {
  constructor() {
    // We need an object to keep track of how many times each value has occurred
    this.modeObj = {};
    // We need to keep track of how many times the current mode has occurred
    this.modeCount = 0;
    // Initialize an empty array to keep track of the mode
    this.mode = [];
    // We only need to keep track of the current sum of the values and the number of values inserted in order to be able to find the mean
    this.count = 0;
    this.sum = 0;
    // We need to keep track of the current min and max value
    this.min = null;
    this.max = null;
  }

  // Insert the argument into the DataTracker
  insert(value) {
    // Increment the count of the value inside the mode object
    this.modeObj[value] = this.modeObj[value] ? this.modeObj[value] + 1 : 1;
    // If the new value occurs more than the previous mode
    if (this.modeObj[value] > this.modeCount) {
      // set the new value as the mode
      this.mode = [value];
      // set the count for the new value as the new mode counter
      this.modeCount = this.modeObj[value];
    // otherwise, if the counts are equal
    } else if (this.modeObj[value] === this.modeCount) {
      // push the value into the mode array
      this.mode.push(value);
    }
    // Increment the count of how many datapoints have been input
    this.count++;
    // Increment the sum of all the datapoints by the new value
    this.sum += value;
    // If there wasn't previously a min, set the value as the min
    // Otherwise use the smaller number between the value and the min
    this.min = (this.min === null) ? value : Math.min(this.min, value);
    // If there wasn't previously a max, set the value as the max
    // Otherwise use the larger number between the value and the max
    this.max = (this.max === null) ? value : Math.max(this.max, value);
  }

  // Return the arithmetic mean of the data set
  getMean() {
    // Divide the current sum by the count of how many data points have been inserted
    return this.sum/this.count;
  }

  // Return the minimum value of the data set
  getMin() {
    return this.min;
  }

  // Return the maximum value of the data set
  getMax() {
    return this.max;
  }

  // Return the mode of the data set
  getMode() {
    return this.mode;
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
