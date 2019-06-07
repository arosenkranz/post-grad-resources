// Efficiency



// -------------------- Question 1 --------------------
//
// `cubeNum` takes a number and returns the value of cubing that number.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------





   --------------- END ANSWER AREA ---------------- */
function cubeNum(num) {
  return num * num * num;
}



// -------------------- Question 2 --------------------
//
// `findLowestNum` takes an array of numbers and returns the smallest number
// in that array.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------





   --------------- END ANSWER AREA ---------------- */
function findLowestNum(arr) {
  var lowest = arr[0];
  for (var i=1; i < arr.length; i++) {
    lowest = Math.min(lowest, arr[i]);
  }
  return lowest;
}



// -------------------- Question 3 --------------------
//
// `checkDivisors` takes an array of numbers and returns true if any
// number is evenly divisibly by another number in the array.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------





   --------------- END ANSWER AREA ---------------- */
function checkDivisors(arr) {
  for (var i = 0; i < arr.length; i++) {
    var currentElem = arr[i];
    for (var j = 0; j < arr.length; j++) {
      var innerElem = arr[j];
      if ((i !== j) && (currentElem % innerElem === 0)) { 
        return true
      }
    }
  }
}



// -------------------- Question 4 --------------------
//
// `strToArray` takes in a string and seperates the characters
// within the string into an array where each element within
// the array is a corresponding character of the string.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------





   --------------- END ANSWER AREA ---------------- */
function strToArray(str) {
  var arr = [];
  var currentWord = "";
  for (var i = 0; i < str.length; i++) {
    if ((str[i] === " ") && (currentWord !== "")){
      arr.push(currentWord);
      currentWord = "";
    } else if (str[i] !== " ") {
      currentWord += str[i];
    }
  }
  if (currentWord !== "") {
    arr.push(currentWord);
  }
  return arr;
}



// -------------------- Question 5 --------------------
//
// `hamming` returns the number of differences between two strings of
// equal length.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------





    --------------- END ANSWER AREA ---------------- */
function hamming(str1, str2) {
  if (str1.length !== str2.length) {
    return "Please pass two strings of equal length to this function"
  }
  var hamm = 0;
  for (var i = 0 ; i < str1.length ; i++) {
    if (str1[i] !== str2[i]) {
      hamm++
    }
  }
  return hamm
}
