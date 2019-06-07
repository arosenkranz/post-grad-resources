// Call Back with Minions


// create a function "minionOne" that takes a callback and a string as arguments
// inside the function, execute the callback with the string as the argument

// ===================== Code Starts Here =====================

function minionOne(minion, message) {
  minion(message);
}

// ===================== Code Ends Here =====================



// call "minionOne" and pass it the function "minionTwo" and 
// a string of "Have you seen Gru?" as arguments

// ===================== Code Starts Here ===================

minionOne(minionTwo, "Have you seen Gru ?")

// ===================== Code Ends Here ===================== 



// create a function "minionTwo" that takes a string as an arguments
// and console logs the string

// ===================== Code Starts Here =====================

function minionTwo(lookingForGru) {
  console.log(lookingForGru)
}

// ===================== Code Ends Here ===================== 



// create a function "minionThree" that takes in two arguments a callback function and a boolean
// if the boolean was true, console log "I found Gru\n -------------\n" and then execute the callback function
// if the boolean wasn't true, console log "Still looking for Gru\n -------------\n"

// ===================== Code Starts Here =====================

function minionThree(fun, Gru) {

  if (Gru === true) {
    console.log("I found Gru\n -------------\n")
    fun();
  } else {
    console.log("Still looking for Gru\n -------------\n")
  }

}

// ===================== Code Ends Here ===================== 



// create a function "callBacksAreFun" that takes no arguments and
// console logs "Hip Hip Horray!\n -------------\n"

// ===================== Code Starts Here =====================

function callBacksAreFun() {
  console.log("Hip Hip Horray!\n -------------\n")
}

// ===================== Code Ends Here ===================== 



// Call the "minionThree" function and pass it the "callBacksAreFun" function 
// and the boolean true as arguments

// ===================== Code Starts Here =====================

minionThree(callBacksAreFun, true)

// ===================== Code Ends Here ===================== 
