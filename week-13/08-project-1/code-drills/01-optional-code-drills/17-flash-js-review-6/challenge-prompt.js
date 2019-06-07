console.log("////////////////////////////// QUESTION 2.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "addToFrontOfNew".

  Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

Starter Code :*/
function addToFrontOfNew(arr, element) {
  // your code here




  // code ends here
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

console.log("////////////////////////////// QUESTION 2.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "computeSquareRoot".

Given a number, "computeSquareRoot" returns its square root.

Starter Code :*/
function computeSquareRoot(num) {
  // your code here








  // code ends here
}

var output = computeSquareRoot(9);
console.log(output); // --> 3

console.log("////////////////////////////// QUESTION 2.3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
/*Write a function called "filterPropertyByIndex".

Given an object and a key, "filterPropertyByIndex" returns an array containing all but the element of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it return an empty array.
* If there is no property at the key, it should return an empty array. 


Starter Code :*/
function filterPropertyByIndex(obj, key) {
  // your code here











  // code ends here
}
var obj = {
  key: [1, 2, 3]
};
var output = filterPropertyByIndex(obj, 'key');
console.log(output); // --> [1,2]


console.log("////////////////////////////// QUESTION 2.4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

Starter Code :*/
function areValidCredentials(name, password) {
  // your code here






  // code ends here
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true
