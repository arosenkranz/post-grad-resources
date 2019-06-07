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
// 



console.log("==================== Question 02 ====================");
// What is the value of california.name?
//



console.log("==================== Question 03 ====================");
// What does `california.getName()` return?
//



// We are passing the getName method from california to stateCall as a callback function
stateCall(california.getName);

function stateCall(callback) {
  // invoking the callback function we passed stateCall
  var location = callback()

  console.log("==================== Question 04 ====================");
  // What is the value of `location`?
  //

}



console.log("==================== Question 05 ====================");
// add a method to `california` that will return the value of the key `capital`
// when invoked. Do not explicitly refer to `california` INSIDE your method

// ================ Your code here ================





// ============== End of your code area ===========

// console log the return value of your method here


// end of console log area



console.log("==================== Question 06 ====================");
// what does `california.sanfrancisco.getName()` return?
//




// We are passing the getName method to cityCall as a callback function
cityCall(california.sanfrancisco.getName);

function cityCall(callback) {
  // invoking the callback function we passed cityCall
  var location = callback()

  console.log("==================== Question 07 ====================");
  // What is the value of `location`?
  //

}



function getName() {
  return this.name;
}

console.log("==================== Question 08 ====================");
// What does `getName()` return?
// 



var counter = 1;

function count() {
  switch (counter) {
    case (counter >= 5):
      return this.counter;
    case (counter % 2 === 0):
      console.log("Even ", counter);
      counter++;
      this.count();
      break;
    default: 
      console.log("Odd ", counter);
      counter++;
      count();
      break;
  }
}

console.log("==================== Question 09 ====================");
// If we execute `count()` what does it console log out?
//



function countWrapper() {
  var counter = 0;
  return this.count();
}

console.log("==================== Question 10 ====================");
// What is the return value of `countWrapper()`
//



// There's some short explanations about the behavior of `this` in the solutions file.