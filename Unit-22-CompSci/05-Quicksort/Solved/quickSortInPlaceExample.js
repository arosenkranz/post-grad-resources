var arr = [];
for (var index = 0, t = 400; index < t; index++) {
  arr.push(Math.round(Math.random() * t));
}

// var arr = [5, 3, 1, 6, 4, 2, 3, 7];

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[left]; // items[Math.floor((right + left) / 2)];
  var i = left - 1;
  var j = right + 1;

  while (i < j) {
    i++;
    j--;

    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(items, i, j);
    }
  }
  return j;
}

function quickSort(items, left, right) {
  // console.log('calling quickSort(items, ', left, ', ', right, ')');
  var index;

  if (right > left) {
    index = partition(items, left, right);
    // console.log('index: ', index);

    quickSort(items, left, index);
    quickSort(items, index + 1, right);
  }

  return items;
}

console.log("Pre Sort:", arr.join(" "));
var result = quickSort(arr, 0, arr.length - 1);
console.log("Post Sort:", result.join(" "));
console.log("DONE!");
