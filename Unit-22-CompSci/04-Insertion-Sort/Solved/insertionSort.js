// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(items) {
  // index into unsorted section, moving right
  var i;
  // index into sorted section, moving left
  var j;

  for (i = 0; i < items.length; i++) {

    // store the current value to insert later (this will be overwritten by the shift)
    var value = items[i];

    // Starting at the element (items[i - 1]) before the current value (value, items[i]), move left
    // through the array (decrementing j) and shift each value to the right (move to items[j + 1]) if it is larger
    // than the current value. Stop when you reach a value which is less than or equal to the current value.
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }

    // insert the value once you've reached the location where items[j] <= value
    items[j + 1] = value;
  }

  return items;
}


// ================================================
// FUNCTION CALL
// ================================================

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
