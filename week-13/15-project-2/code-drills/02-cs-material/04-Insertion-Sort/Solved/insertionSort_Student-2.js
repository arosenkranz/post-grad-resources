const swap = (items, firstIndex, secondIndex) => {
  let temp = items[firstIndex];
  // set the item in the first index to the item in the second index
  items[firstIndex] = items[secondIndex];
  // set the item in the second index to what was previously the item in the first index
  items[secondIndex] = temp;
}

const insertionSort = (items) => {
  // grab the length so the first loop knows when to stop
  const len = items.length;

  //for each item in the array, starting with the first... 
  for (let i=0; i<len-2; i++) {
    //start with the item to the right, and evaluate all the numbers preceeding that one
    for (let j=i+1; j>=0; j--) {
      // if the number to the right is less than the one in front of it, swap them
      if (items[j] < items[j-1]) {
        swap(items, j, j-1);
      }
    }
  }

  return items;
}