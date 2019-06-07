//Hint pseudocode
//create a function that takes in an ordered array of integers and a target number to search for
//Set some starting values:
//maxIndex
//minIndex

//While minIndex <= maxIndex
// Get a position near the middle and check to if that currentIndex matches your target 

// if that currentIndex less than we are looking for, look *above* this value.
//minIndex = currentIndex + 1;

// If it's more than we are looking for, look *below* this value.
//maxIndex = currentIndex - 1;

//if currentElement is not greater then searchElement && currentElement is not less then searchElement && minIndex <= maxIndex 
// We found it; return the index.

// otherwise:
//if it is greater or less then the target and minIndex <= maxIndex
//return false