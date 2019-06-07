// The following four functions take in a number, apply some
// mathematical operation to it and then executes the first
// callback given to it with the number and the other callbacks
// as arguments. If it doesn't have any callbacks, it will
// simply return the value of the mathematical operation.


// This function adds two to the number argument passed to it
// and then calls on the first callback function it was passed
// with the new sum and the second and third callback function
// as arguments
function addTwo(num, callback1, callback2, callback3) {
  if (typeof callback1 === "function")
    callback1(num + 2, callback2, callback3);
  else
    console.log(num + 2);
}

// This function divides the number argument passed to it by 3
// and then calls on the first callback function it was passed
// with the new quotient and the second and third callback function
// as arguments
function divideThree(num, callback1, callback2, callback3) {
  if (typeof callback1 === "function")
    callback1(num / 3, callback2, callback3);
  else
    console.log(num / 3);
}

// This function squares the number argument passed to it
// and then calls on the first callback function it was passed
// with the new square and the second and third callback function
// as arguments
function square(num, callback1, callback2, callback3) {
  if (typeof callback1 === "function")
    callback1(num * num, callback2, callback3);
  else
    console.log(num * num);
}

// This function subtracts 1 from the number argument passed to it
// and then calls on the first callback function it was passed
// with the new value and the second and third callback function
// as arguments
function subtractOne(num, callback1, callback2, callback3) {
  if (typeof callback1 === "function")
    callback1(num - 1, callback2, callback3);
  else
    console.log(num  - 1);
}


var six = 6;
// Using only the functions and the `six` variable given to you, console log 4
// You will not have to use a function more than once and some might not be used
//
// You should only need one function call to complete this.
// -------------------- Your Code Here --------------------
divideThree(six, addTwo)
// -------------------- End Code Area ---------------------

var four = 4;
// Using only the functions and the `four` variable given to you, console log 11
// You will not have to use a function more than once and some might not be used
//
// You should only need one function call to complete this.
// -------------------- Your Code Here --------------------
subtractOne(four, square, addTwo)
// -------------------- End Code Area ---------------------

var five = 5;
// Using only the functions and the `five` variable given to you, console log 8
// You will not have to use a function more than once and some might not be used
//
// You should only need one function call to complete this.
// -------------------- Your Code Here --------------------
square(five, addTwo, divideThree, subtractOne)
// -------------------- End Code Area ---------------------
