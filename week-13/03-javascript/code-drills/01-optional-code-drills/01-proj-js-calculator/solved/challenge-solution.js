// declare a variable to store the user input and set it to an empty array for now
var userExpression = [];

// create a string of all the valid inputs for our validation logic to check against
var validInputs = "1234567890+-*/=c";


// ==================== Evaluation Function ====================
//
// create function that takes in an array and evaluates that array as a mathematical function
// Feel free to come back to this function later if you want to. We will not be using this
// immediately.
//
// =============================================================
function evaluateArray(arr) {

  // declare 3 variables, one for the first number, one for the second, and one for the operator
  // set the variables for the numbers to be an empty string for now
  var num1 = "";
  var num2 = "";
  var operator;

  // iterate through the array from the argument
  for (var i = 0; i < arr.length; i++) {


    // if the operator is already defined
    // not being defined is a "falsey" value and will evaluate to false in the if statement
    // if operator has a value, it will evaluate to true
    if (operator) {


      // append the current element to the end of the second number
      num2 = num2 + arr[i];
    }
    // if the operator hasn't already been defined
    else {

      // check if the the current element is an operator
      if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/"){

        // if the current element is an operator, set the value of our operator variable to
        // be the current element
        operator = arr[i];
      }     
      // if the current element is not an operator
      else {

        // append it to the end of the first number
        num1 = num1 + arr[i];
      }
    }
  }

  
  
  // after we've iterated through the array, parse the first and 
  // second numbers into integers from strings
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // then, check if the operator is a '+' sign
  if (operator === '+') {

    // if the operator is a '+' sign, return the value of the first number added to the second number
    return num1 + num2;

  }
  // if the operator isn't a '+' sign, check if the operator is a '-' sign
  else if (operator === '-') {

    // if the operator is a '-' sign, return the value of the first number subtracted from the second number
    return num1 - num2;

  }
  // if the operator isn't a '-' sign, check if the operator is a '*' sign
  else if (operator === '*') {

    // if the operator is a '*' sign, return the value of the first number multiplied by the second number
    return num1 * num2;
    
  }
  // if the operator isn't a '*' sign, check if the operator is a '/' sign
  else if (operator === '/') {

    // if the operator is a '/' sign, return the value of the first number divided by the second number
    return num1 / num2;

  }
}



// ==================== Event Listener ====================
//
// Create an event listener that listens to user key presses
//
// ========================================================
document.onkeyup = function(input){

  // check to make sure the user pressed a valid button (check the input against the array we made)
  var key = input.key;
  if (validInputs.includes(key)) {

    // if the input was valid, check if it was the letter 'c'
    if (key === 'c') {
    
      // if it was 'c', set the expression array back to an empty string and clear the results
      // output area on the webpage
      userExpression = [];
      document.getElementById("user-result").textContent = "";
    
    }
    // if the input wasn't the letter 'c', check if it was an '='
    else if (key === '=') {

      // if it was an '=', send the user expression into our array expression evaluator function
      var result = evaluateArray(userExpression);

      // then, output the results of that function into the results area of our webpage
      document.getElementById("user-result").textContent = result;
    }

    // if the input wasn't an '=', check whether it was an operator
    else if (key === '+' || key === '-' || key === '*' || key === '/') {

      // if it was an operator, check whether an operator already exists in the user expression array
      if (userExpression.includes("+") || userExpression.includes("-") || userExpression.includes("*") || userExpression.includes("/")) {

        // if it already exists, output a message to the results area on the webpage telling the user
        // that they already input an operator
        document.getElementById("user-result") = "You've already input an operator!"

      }

      // if there wasn't already an operator, add the input to the expression
      else {
        userExpression.push(key);
      }
    }

    // if it wasn't an operator, then it must be a number because we've gone through all the other
    // valid inputs, so store that number into the expression array
    else {
      userExpression.push(key)
    }
  }

  // if the input wasn't valid, output an error message to the results area on the webpage
  else {
    document.getElementById("user-result").textContent = "Please press a valid key";
  }


  // finally, outside the 'if-else' statement, set the textContent of the user expression div
  // to be our expression array
  document.getElementById("user-expression").textContent = userExpression;

}