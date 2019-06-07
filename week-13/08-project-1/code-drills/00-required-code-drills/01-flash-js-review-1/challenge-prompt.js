console.log("////////////////////////////// QUESTION 1.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "fullName".
// Inside the fullName have it return the obj's fullname and which consist of the first and last name seperated by a space*/

//Input : object with a key of firstName and a key of lastName, each pointing to a string

//Output: The same object with a third key, fullName. fullName's value should be the value of object.firstName concatenated to the value of obj.lastName, separated by a space.

function fullName(obj) {
    // your code here


}

var person = {
    firstName: 'Jaden',
    lastName: 'Smith'
};
fullName(person);
console.log(person.fullName); // --> 'Jaden Smith'

console.log("////////////////////////////// QUESTION 1.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "checkAge". 

Return one of the following messages depending on the number given

"Go home, [name]!", if the number is smaller than 21.
"Welcome, [name]!", if the number is larger than 21.*/


//Input : A name and an age

//Output: A greeting whose contents depend on the given age

function checkAge(name, age) {
    // your code here








}

var outputOne = checkAge('Farley', 22);
console.log(outputOne); // --> 'Welcome, Farley!'

console.log("////////////////////////////// QUESTION 1.3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "perimeterOfARectangle".

// Given a length and a width, return the perimeter of a rectangle*/
function perimeterOfARectangle(length, width) {
    // your code here

}

var outputTwo = perimeterOfARectangle(5, 2);
console.log(outputTwo); // --> 14

console.log("////////////////////////////// QUESTION 1.4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. */
function getAllLetters(str) {
    // your code here

}
var outputThree = getAllLetters('Farley');
console.log(outputThree); // --> ['F', 'a', 'r', 'l', 'e', 'y']


console.log("////////////////////////////// QUESTION 1.5 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "equalsTen".

if the number is equal to 10 return true and any other number return false*/
function equalsTen(num) {
    // your code here






}
var outputFour = equalsTen(9);
console.log(outputFour); // --> false
