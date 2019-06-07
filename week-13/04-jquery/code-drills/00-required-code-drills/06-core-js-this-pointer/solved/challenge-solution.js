// Practice `this`

// Answer the questions posed by the comments or write the code
// they ask for in the section provided

// As you work through this exercise, add console logs where
// we provided the seperator console logs for the question and run
// the code to check your answer for each question before moving on 
// to the next one

var california = {
  name: "California",
  capital: "Sacramento",
  visit: function () {
    console.log("Welcome to beautiful " + this.name);
  },
  getName: function () {
    return this.name;
  },
  sanfrancisco: {
    name: "San Francisco",
    getName: function() {
      return this.name;
    }
  }
}

var name = "Not California";

console.log("==================== Question 01 ====================");
// What is the value of `this.name`?
// "Not California"
// In javascript, the `this` keyword points to the object that calls the function.
// If an object is not explicitly stated, it's the global `window` that executes
// the function, so `this` refers to the global object which also holds all our
// global variables and functions
console.log(this.name);


console.log("==================== Question 02 ====================");
// What is the value of california.name?
//"California"
console.log(california.name);


console.log("==================== Question 03 ====================");
// What does `california.getName()` return?
// "California"
console.log(california.getName());


// We are passing the getName method from california to stateCall as a callback function
stateCall(california.getName);

function stateCall(callback) {
  // invoking the callback function we passed stateCall
  var location = callback();

  console.log("==================== Question 04 ====================");
  // What is the value of `location`?
  // "Not California"
  // When this callback is invoked, we lose the context of the method. The object is no
  // longer calling the method since only the method was passed into `stateCall`, so when
  // that method is called, it's the `window` calling the method
  console.log(location);

}



console.log("==================== Question 05 ====================");
// add a method to `california` that will return the value of the key `capital`
// when invoked. Do not explicitly refer to `california` INSIDE your method

// ================ Your code here ================

california.getCapital = function() {
  return this.capital;
}



// ============== End of your code area ===========

// console log the return value of your method here
console.log(california.getCapital());

// end of console log area



console.log("==================== Question 06 ====================");
// what does `california.sanfrancisco.getName()` return?
// San Francisco
console.log(california.sanfrancisco.getName());



// We are passing the getName method to cityCall as a callback function
cityCall(california.sanfrancisco.getName);

function cityCall(callback) {
  // invoking the callback function we passed cityCall
  var location = callback();

  console.log("==================== Question 07 ====================");
  // What is the value of `location`?
  // "Not California"
  console.log(location);
}



function getName() {
  return this.name;
}

console.log("==================== Question 08 ====================");
// What does `getName()` return?
// "Not California"
console.log(getName());


var counter = 1;

function count() {
  if (counter >= 5){
    return this.counter;
  } else if (counter % 2 === 0) {
    console.log("Even ", counter);
    counter++;
    return this.count();
  } else {
    console.log("Odd ", this.counter);
    counter++;
    return count();
  }
}

console.log("==================== Question 09 ====================");
// If we execute `count()` what does it console log out?
// Odd 1
// Even 2
// Odd 3
// Even 4
count();


function countWrapper() {
  counter = 0;
  return count();
}

console.log("==================== Question 10 ====================");
// What is the return value of `countWrapper()`
// 5
console.log("Return ", countWrapper())

