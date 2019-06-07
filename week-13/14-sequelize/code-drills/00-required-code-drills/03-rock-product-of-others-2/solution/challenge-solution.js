// Product of all other numbers


// `otherProduct` takes in an array of numbers and returns a
// new array where each element is the product of multiplying
// all the numbers of the argument array except for the element
// at the index of the current element
function otherProduct (arr) {
  var returnArr = [];
  var product = 1;
  for (var i=0; i<arr.length; i++) {
    product *= arr[i];
  }
  for (i=0; i<arr.length; i++) {
    returnArr.push(product/arr[i])
  }
  return returnArr;
}

// Should return [ 40, 200, 80, 100 ]
console.log(otherProduct([10, 2, 5, 4]))

// Should return [ 60, 40, 30, 24 ]
console.log(otherProduct([2, 3, 4, 5]))

// Should return [ 2, 1 ]
console.log(otherProduct([1, 2]))

// Should return [ 672, 84, 224, 168, 96 ]
console.log(otherProduct([1, 8, 3, 4, 7]))
