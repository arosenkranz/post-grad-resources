// modified from https://gist.github.com/ttezel/3124434
var unsorted = [];
for (var index = 0, t = 400000; index < t; index++) {
  unsorted.push(Math.round(Math.random() * t));
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // get random pivot element (and remove from array to add back in later)
  var pivot = array.splice(Math.floor(Math.random() * array.length), 1);

  // create left array (elements <= pivot), and right array (elements > pivot)
  var left = [];
  var right = [];

  // loop through array and create left/right
  array.forEach(function(el) {
    if (el <= pivot) {
      left.push(el);
    }
    else {
      right.push(el);
    }
  });

  // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
  // result of recursively sorting the right array (using quicksort).
  // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log("Pre Sort:", unsorted.join(" "));
var sorted = quickSort(unsorted);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
