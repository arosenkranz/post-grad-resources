// 1. 
// create a function "logAnimalsAndTypes" that console.logs the below object in the following format: key: value.

// Example: rhino: mammal

// Your output cannot be an object
// You may not use var

// You must use:
// - An arrow function
// - The .map method
// - Template literals
const animals = {
  rhino: "mammal",
  eagle: "bird",
  frog: "amphipian",
  shark: "fish",
  tiger: "mammal",
  parrot: "bird"
}


// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============



// 2. Write the below function IN ONE LINE OF CODE. Call the new function "addStrings1"
// ES5
function addStrings(str1, str2) {
  return str1 + str2
}


// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============


console.log(addStrings("hello", " there"))

console.log(addStrings1("hello", " there"))





// 3. In one line of code, invoke the function below, passing in two numbers and an anonymous function which returns their added value.
function doStuff(arg1, arg2, callback) {
  callback(arg1, arg2)
}


// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============


// 4. Write the below function in ES6 syntax

// ES5

function whoChanging() {
  var counter = 0;
  var bool = true
  var incrementer = 2
  while (bool) {

    if (counter = 20) {
      bool = false
    }

    counter+=incrementer
  }
}

// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// 5. Rewrite the function below using a template literal
// ES5
function madLibs(occupation, transportVerb, adverb, adjective, animal, presentTenseVerb, adjective2) {
"The "+occupation+" "+transportVerb+" on his/her way to the church very "+adverb+". The surrounding crowd could not believe he/she would do so on such a/an "+adjective+" day. Meanwhile, across the street, an "+animal+" was "+presentTenseVerb+". It was truly a/an "+ adjective2 +" sight to see"
}

// Have fun making your own test on this one 😈.