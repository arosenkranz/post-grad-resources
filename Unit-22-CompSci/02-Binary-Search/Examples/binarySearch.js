var result = binarySearch([1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784], 77);
console.log(result);

function binarySearch(numbersArr, searchElement) {

  // Set some starting values.
  var currentElement;
  var currentIndex;
  var maxIndex = numbersArr.length - 1;
  var minIndex = 0;

  // This is the main loop.
  while (minIndex <= maxIndex) {

    // Get a position near the middle.
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    // Get that element.
    currentElement = numbersArr[currentIndex];

    // Test it.
    if (currentElement < searchElement) {
      // if it's less than we are looking for, look *above* this value.
      minIndex = currentIndex + 1;

    }
    else if (currentElement > searchElement) {

      // If it's more than we are looking for, look *below* this value.
      maxIndex = currentIndex - 1;
    }
    else {
      // We found it; return the index.
      return currentIndex;
    }

  }

  return false;
}
