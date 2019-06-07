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
console.log(compressor1("hhhkkkkkkttttttttt"))
console.log(compressor1("hrkjqehvewqjhvheqvwjcgfwegiuf"))

// ES6
compressor = str => {
  let newString = ""
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (!(newString.includes(str[i]))) {
      newString += (str[i] + obj[str[i]])
    }
  }
  return newString
}
console.log(compressor("hhhkkkkkkttttttttt"))
console.log(compressor("hrkjqehvewqjhvheqvwjcgfwegiuf"))



// 2. 

var array = ["predestined", "predetermined", "prescient", "preschool", "precious"]
var array2 = ["predestined", "predetermined"]
var array3 = ["prescient", "preschool"]

// ES5
function longestPrefix(arr) {
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

console.log(longestPrefix(array))
console.log(longestPrefix(array2))
console.log(longestPrefix(array3))


// ES6

longestPrefix1 = arr => {
  let compare = arr[0].split("")
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (compare[j] !== arr[i][j] && compare[j]) {
        compare.splice(j)
      }
    }
  }
  compare = compare.join("")
  return compare
}

console.log(longestPrefix1(array))
console.log(longestPrefix1(array2))
console.log(longestPrefix1(array3))


// 3.
const input = [9, 4, 3, 6, 8, 2];
const input2 = [13, 22, 20, 18, 15, 16];
const input3 = [0, 2, 3, 4];
const input4 = [0, 1, 3];
// ES5


function missing(arr) {
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
      final.push(i)
    }
  }

  return final
}

console.log(missing(input))
console.log(missing(input2))
console.log(missing(input3))
console.log(missing(input4))

// ES6

missing1 = arr => {
  let high = arr[0];
  let low = arr[0];
  arr.forEach(i => {
    if (i > high) {
      high = i;
    }

    if (i < low) {
      low = i
    }
  });
  let final = [];
  for (let i = low; i < high; i++) {
    if (!arr.includes(i)) {
      final = [...final, i]
    }
  }
  return final
}

console.log(missing1(input))
console.log(missing1(input2))
console.log(missing1(input3))
console.log(missing1(input4))
