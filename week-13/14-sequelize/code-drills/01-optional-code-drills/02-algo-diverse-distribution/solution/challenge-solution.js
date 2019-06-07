// Diverse Distribution


// `distribCount` is a function that takes in an array of numbers
// and returns the maximum number of unique numbers that can be
// contained within an even split of the array
function distribCount(arr) {
  var numbers = {};
  var uniqueCount = 0;
  var splitCount = Math.floor(arr.length / 2);
  for (var i = 0; i < arr.length; i++) {
    if (!numbers[arr[i]]) {
      numbers[arr[i]] = true;
      uniqueCount++;
    }
  }
  return Math.min(uniqueCount, splitCount);
}

var books = [1, 1, 2, 3, 4, 4, 4]
// Should be 3
console.log(distribCount(books))

books = [1, 1, 1]
// Should be 1
console.log(distribCount(books))

books = [1, 1, 1, 2, 2, 2]
// Should be 2
console.log(distribCount(books))

books = [1, 2]
// Should be 1
console.log(distribCount(books))

books = [1]
// Should be 0
console.log(distribCount(books))
