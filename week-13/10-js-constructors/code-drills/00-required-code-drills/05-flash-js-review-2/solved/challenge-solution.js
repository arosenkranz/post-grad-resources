/*Write a function called "indexOfLetter".

Given a character and a string, "indexOfLetter" returns the first time the letter occurs 
Starter Code :*/
function indexOfLetter(char, str) {
  // code starts here

  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i; 
    }
  }
  return -1;
  // code ends here
}

var output = indexOfLetter('a', 'Im a Software Engineer');
console.log(output); // --> 3

/*Write a function called "evenElementsOnly".

Given an object and a key, "evenElementsOnly" looks through the array of numbers
at that key and returns a new array containing only even elements from that array

Starter Code :*/
function evenElementsOnly(obj, key) {
  // code starts here
  var evenArray = [];
  for (var prop in obj[key]) {
    if (obj[key][prop] % 2 === 0) {
      evenArray.push(obj[key][prop]);
    }
  }
  return evenArray;
    // code ends here
}

var obj = {
  key: [1000, 11, 51, 17]
};
var output = evenElementsOnly(obj, 'key');
console.log(output); // --> [1000, 51]
