var array = [1, 2, 3, 4];
console.log(array);

// Adding to beginning
array.unshift(1);
console.log(array);

// Adding to beginning
for (var i = array.length; i >= 0; i--) {
  array[i] = array[i - 1];
}

array[0] = -1;
