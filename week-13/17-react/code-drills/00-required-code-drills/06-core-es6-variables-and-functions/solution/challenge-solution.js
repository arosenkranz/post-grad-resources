// ES6 Review


// ------------------------------------------------------
const changeStr = (str) => {
  let temp = str[0];
  const output = [];
  for (let i=1; i<str.length; i++) {
    const temp = str[i];
    output.push(temp);
  }
  output.push(temp);
  return output.join("");
}

console.log("\n========== Question 01 ==========");
const question1 = changeStr("Hello");
// What is the value of `question1`?
/* --------------- Your Answer Here ---------------

  "elloH"

   --------------- End Answer Area ---------------- */




// ------------------------------------------------------
const person = ({name, location, age}) => {
  return `Hello, my name is ${name}. I am ${age} years old, and I am from ${location}.`;
}

console.log("\n========== Question 03 ==========");
const temp = {
  name: "John",
  location: "Anytown, USA",
  age: 28
}
const question3 = person(temp);
// What is the value of `question3`?
/* --------------- Your Answer Here ---------------

  "Hello, my name is John. I am 28 years old, and I am from Anytown, USA."

   --------------- End Answer Area ---------------- */




// ------------------------------------------------------
const combineStr = (str1, str2) => [...str1, ...str2];

console.log("\n========== Question 03 ==========");
const question2 = combineStr("hello", "world");
// What is the value of `question2`?
/* --------------- Your Answer Here ---------------

  [ "h", "e", "l", "l", "o", "w", "o", "r", "l", "d" ]

   --------------- End Answer Area ---------------- */




// ------------------------------------------------------
console.log("\n========== Question 04 ==========");
// `countRepeats` takes in an array of strings and returns an objects where the keys are the strings that appear inside the argument and the values are the number of times their corresponding key appears
// Write this function using `let` and `const` for your variable declarations, fat arrow syntax for defining any functions, and array methods for iteration
// You should not have to write any for loops; use the array methods instead.
//
// -------------------- Your Code Here --------------------

const countRepeats = arr => {
  const countObj = arr.reduce((accumulator, elem) => {
    if (accumulator[elem]) accumulator[elem]++;
    else accumulator[elem] = 1;
    return accumulator;
  }, {});
  return countObj;
}

// -------------------- End Code Area ---------------------
const fruits = ["apple", "banana", "peach", "apple", "apple", "grape", "banana"]
console.log(countRepeats(fruits))

/* Should be:
{
  apple: 3,
  banana: 2,
  peach: 1,
  grape: 1
}
*/




// ------------------------------------------------------
console.log("\n========== Question 05 ==========");
// `sumEvens` takes in an array of integers and returns the sum of all the even numbers within that array
// Write this function using `let` and `const` for your variable declarations, fat arrow syntax for defining any functions, and array methods for iteration
// You should not have to write any for loops; use the array methods instead.
//
// -------------------- Your Code Here --------------------

const sumEvens = arr => arr.reduce((accumulator, elem) => {
  if (elem % 2 === 0) accumulator += elem;
  return accumulator;
}, 0);

// -------------------- End Code Area ---------------------
const numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];
console.log(sumEvens(numArray))

// Should be: 138
