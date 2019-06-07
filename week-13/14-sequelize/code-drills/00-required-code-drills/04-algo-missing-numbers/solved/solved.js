var input = [9,4,3,6,8,2];
var input2 = [13,22,20,18,15,16];
var input3 = [0,2,3,4];
var input4 = [0,1,3];


function missing(arr) {
  // Start with the first value and reassign depending on whether i is higher or lower
var high = arr[0];
var low = arr[0];

// Assigns the boundaries to the vars above
for (var i = 0 ; i < arr.length ; i++) {
  if (arr[i] > high) {
    high = arr[i];
  }

  if (arr[i] < low) {
    low = arr[i]
  }
}

var final = [];
// Whatever isnt included will go to the final array
for (var i = low ; i < high ; i++) {
  if (!arr.includes(i)) {
    final.push(i)
  }
}

return final
}

console.log(missing(input))
console.log(missing(input2))
console.log(missing(input3))
console.log(missing(input4))