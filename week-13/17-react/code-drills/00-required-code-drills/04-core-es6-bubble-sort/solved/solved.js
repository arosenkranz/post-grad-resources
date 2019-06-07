const unsorted = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

bubbleSort = (arr) => {
  arr.forEach(i => {
    for (let j = 0 ; j < arr.length ; j++) {
      if (arr[j-1] > arr[j]) {
       const temp = arr[j-1] 
       arr[j-1]  = arr[j]
        arr[j] = temp
      }
    }
  })
  return arr
}

console.log(bubbleSort(unsorted))
