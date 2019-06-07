// First Three Function


// The `firstThree` function will console log "Hello, I have been run X times"
// where `X` is the number of times it's been run so far; then it will return 
// true. after it has been run 3 times, subsequent invocations of this function 
// will not console log anything and return false.
//
// -------------------- Your Code Here --------------------

// We're going to assign `firstThree` to be the return value of an immediately
// invoked function
var firstThree = function() {
  // Store the times the function has been run inside this immediately invoked
  // function in order to have access to it in the function we're going to define
  // next without it constantly resetting each time we rerun the function
  var timesRun = 0;
  // The return value of a function can be anything, even another function. We're
  // taking advantage of that and returning an anonymous function that has the actual 
  // logic of what we want `firstThree` to do. It's simply within the immediately 
  // invoked function in order to preserve the times run counter. Because the outer
  // function is immediately invoked, its return value is going to be assigned to
  // `firstThree`. In this case, the return value is another function, so we're giving
  // `firstThree` the behavior we want by making it a function.
  return function(){
    if (timesRun < 3) {
      timesRun++;
      console.log("Hello, I have been run " + timesRun + " times")
      return true;
    } else{
      return false;
    }
  }
// We immediately invoke the function by putting the opening and closing 
// parenthesis after its definition.
}()
// -------------------- End Code Area ---------------------


console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
