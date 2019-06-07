// var result = binarySearch([
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20], 9);

var arrayOne = [
  1,
  23,
  43,
  56,
  77,
  89,
  211,
  212,
  789,
  972,
  1001,
  4567,
  4599,
  83784
];

var arrayyTwo = [
  1,
  2,
  4,
  8,
  9,
  10,
  13,
  18,
  23,
  25,
  30,
  33,
  36,
  42,
  43,
  56,
  57,
  77,
  89,
  211,
  212,
  789,
  972,
  1001,
  4567,
  4599,
  83784
];
// var result = binarySearch(arrayOne, 77);

var result = binarySearch(arrayyTwo, 77);

console.log(result);

function binarySearch(stuff, searchElement) {

  // Set some starting values.
  var currentElement;
  var currentIndex;
  var maxIndex = stuff.length - 1;
  var minIndex = 0;
  var step = 0
  // This is the main loop.
  while (minIndex <= maxIndex) {
    
    // Get a position near the middle.
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    // Get that element.
    currentElement = stuff[currentIndex];
    step += 1
    console.log("Step: " + step)
    console.log("CurrentElement: " + stuff[currentIndex])
    console.log("Current Index:" + currentIndex)
    console.log("minIndex: " + minIndex)
    console.log('maxindex: ' + maxIndex)
    console.log("-------")
    // Test it.
    if (currentElement < searchElement) {
      // if it's less than we are looking for, look *above* this value.
      // console.log("less then")
      minIndex = currentIndex + 1;

    }
    else if (currentElement > searchElement) {
      console.log("less then")
      // If it's more than we are looking for, look *below* this value.
      maxIndex = currentIndex - 1;
    } 
    else {
      // We found it; return the index.
      console.log("********")
      return currentIndex;
    }

  }

  return false;
}
