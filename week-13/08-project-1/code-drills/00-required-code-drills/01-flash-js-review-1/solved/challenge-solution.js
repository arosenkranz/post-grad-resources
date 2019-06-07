console.log("////////////////////////////// QUESTION 1.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "fullName".
Inside the fullName have it return the obj's fullname and which consist of the first and last name seperated by a space*/

function fullName(obj) {
    // Code Starts Here
    obj.fullName = obj.firstName + ' ' + obj.lastName;
    return obj.fullName;
}

var person = {
    firstName: 'Jad',
    lastName: 'Smith'
};
fullName(person);
console.log(person.fullName); // --> 'Jade Smith'

console.log("////////////////////////////// QUESTION 1.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "checkAge". 

inside the checkAge function check the person's name and age,  returns one of two messages:

"Go home, Farley!", if they are younger than 21.
"Welcome, Farley!", if they are 21 or older.*/

function checkAge(name, age) {
    // Code Starts Here
    outputOne = '';
    if (age < 21) {
        outputOne = 'Go home' + ' ' + name;
    }
    else {
        outputOne = 'Welcome' + ' ' + name;
    }
    return outputOne;
}

var outputOne = checkAge('Farley', 22);
console.log(outputOne); // --> 'Welcome, Farley!'

console.log("////////////////////////////// QUESTION 1.3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "perimeterOfARectangle".

inside the perimeterOfARectangle return the perimeter of a recentagle if the lenth is 5 and width is 2*/

function perimeterOfARectangle(length, width) {
    // Code Starts Here
    return length * 2 + width * 2;
}

var outputTwo = perimeterOfARectangle(5, 2);
console.log(outputTwo); // --> 14

console.log("////////////////////////////// QUESTION 1.4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word. */

function getAllLetters(str) {
    // Code Starts Here

    return str.split("");

}
var outputThree = getAllLetters('Farley');
console.log(outputThree); // --> ['F', 'a', 'r', 'l', 'e', 'y']


console.log("////////////////////////////// QUESTION 1.5 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "equalsTen".

if the number is equal to 10 return true and any other number return false*/

function equalsTen(num) {
    // Code Starts Here
    if (num == 10) {
        return true;
    } else {
        return false;
    }
}
var outputFour = equalsTen(9);
console.log(outputFour); // --> false
