// Mega-Modular FizzBuzz
// Fizz Buzz Alpha Super

// Single Method Responsibility: 
// The FizzBuzz we defined in class met the requirements but is not very reusable. 
// For example what if the data type changed from an Array to a single number? 
// You could duplicate the method that we created and create a new method for each data type. 
// After completing it you might find that there is a lot of duplicated code. 
// Together we are going to build one of the most flexible versions of FizzBuzz that the world has ever seen! 

// Requirements:

// Complete all the requirements for FizzBuzz:
// Use these empty function to create your program.
// Try to break up the functionality so that each method does exactly one thing. 

// Here is the starter code: 

// This method just wraps our `fizzBuzzDataTypeChecker` call. You will not need to edit this function
function fizzBuzzSuper(dataTypeInput){
  izzBuzzDataTypeChecker(dataTypeInput);
}

// This method should evaluate what the data type is and send it to the appropriate method
// for handling that data type.
// You will need to create a series of conditionals, each executing different actions depending 
// on the data type of the argument passed to this function.
function fizzBuzzDataTypeChecker(dataTypeInput){

  // ---------- Your Code Here ----------


    //if the argument is an array then call the `dataTypeArray` function with it as an argument


    //if the argument is an obj then call the `dataTypeObj` function with it as an argument


    //if the argument is a string then call the `customIsNum` function with it as an argument to see if the string can be converted to an integer


      //if the string argument can be converted into an integer then call the `fizzBuzzCalculation` function with it converted to an integer as an argument


      //if the string argument cannot be converted into an integer then call the `consoleLogNonNumber` function with it as an argument


    //if the argument is an integer, then call the `fizzBuzzCalculation` function with it as an argument

    
    //if the argument is a boolean, then call the `consoleLogNonNumber` function with it as an argument



   // ----------- End Code Area -----------
}



// this method takes as an array as the argument and iterates through it and
// sends each element to the `fizzBuzzDataTypeChecker` method we just defined.

// We have to do this because we don't know what type of values are stored within
// the array. Is is a string? Is it a number? Is it another array? By sending it to
// type checker method we already wrote, that type checker method can handle
// sorting through the type of the element and pass that element along to the correct
// function
function dataTypeArray(dataTypeInput){
  // ---------- Your Code Here ----------






  // ----------- End Code Area -----------
}


// This method takes as an argument an object and iterates through the keys and 
// sends each value to the `fizzBuzzDataTypeChecker` method

// Much like the method we just defined for arrays. We don't know
// the type of elements within the object, so we'll have to send it all to our
// type checker method
function dataTypeObj(dataTypeInput){
  // ---------- Your Code Here ----------






  // ----------- End Code Area -----------
}


// This method takes in an integer and evaluates whether to replace it with
// "Fizz", "Buzz", or both. It will console log either the replacement string
// or the original value

// This method should be very familiar to you. It is the replacement logic of
// "FizzBuzz" without the iteration since we're going to be calling on this
// within our iterations
function fizzBuzzCalculation(input){
  // ---------- Your Code Here ----------






  // ----------- End Code Area -----------
}


// This method takes in the argument and simply console logs both the argument 
// and a message that tells the user that the argument wasn't a number. For example:

// '{input}' IS NOT A NUMBER

// where {input} is replaced by the value of the argument given to `consoleLogNonNumber`
function consoleLogNonNumber(input){
  // ---------- Your Code Here ----------






  // ----------- End Code Area -----------
}


// This method is provided for you. It takes in an argument and returns
// true if it is an integer and false otherwise
function customIsNum(input){
  // return (typeof input === "number")
  if(parseInt(input).toString() === input){
      return true
  }else {
      return false
  }
}


// The expected output of this function call should resemble: 

// Fizz
// 8
// Buzz
// 'FizzBuzz' is not a number
// 34
// FizzBuzz
// 'String / Word' is not a number
// 44
var arrayOfElements = [{"key":3, "lock":"8"}, "FizzBuzz", 5,  34, "15", "String / Word", 44]
fizzBuzzSuper(arrayOfElements)
