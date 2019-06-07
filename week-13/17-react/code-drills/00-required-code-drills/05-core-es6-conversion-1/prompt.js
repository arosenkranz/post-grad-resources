// 1.

// ES5
function compressor1(str) {
  var newString = ""
  var obj = {}
  for (var i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (!(newString.includes(str[i]))) {
      newString += (str[i] + obj[str[i]])
    }
  }
  return newString
}
console.log("compressor", compressor1("hhhkkkkkkttttttttt"))
console.log("compressor", compressor1("hrkjqehvewqjhvheqvwjcgfwegiuf"))

// ES6
// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log("compressor", compressor("hhhkkkkkkttttttttt"))
console.log("compressor", compressor("hrkjqehvewqjhvheqvwjcgfwegiuf"))



// 2. 

var array = ["predestined", "predetermined", "prescient", "preschool", "precious"]
var array2 = ["predestined", "predetermined"]
var array3 = ["prescient", "preschool"]

// ES5
function longestPrefix1(arr) {
  var compare = arr[0].split("")
  var newstring = ""
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (compare[j] !== arr[i][j] && compare[j]) {
        compare.splice(j)
      }
    }
  }
  compare = compare.join("")
  return compare
}

console.log("longestPrefix", longestPrefix1(array))
console.log("longestPrefix", longestPrefix1(array2))
console.log("longestPrefix", longestPrefix1(array3))


// ES6
// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log("longestPrefix", longestPrefix(array))
console.log("longestPrefix", longestPrefix(array2))
console.log("longestPrefix", longestPrefix(array3))


// 3.
const input = [9, 4, 3, 6, 8, 2];
const input2 = [13, 22, 20, 18, 15, 16];
const input3 = [0, 2, 3, 4];
const input4 = [0, 1, 3];
// ES5


function missing1(arr) {
  var high = arr[0];
  var low = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }
    if (arr[i] < low) {
      low = arr[i]
    }
  }
  var final = [];
  for (var i = low; i < high; i++) {
    if (!arr.includes(i)) {
      // You may not use the push method in your ES6 version
      final.push(i)
    }
  }
  return final
}

console.log("missing", missing1(input))
console.log("missing", missing1(input2))
console.log("missing", missing1(input3))
console.log("missing", missing1(input4))

// ES6


  // ============ YOUR WORK HERE ===========





  //  ============== END WORK ==============

  // TESTS

  console.log("missing", missing(input))
  console.log("missing", missing(input2))
  console.log("missing", missing(input3))
  console.log("missing", missing(input4))
