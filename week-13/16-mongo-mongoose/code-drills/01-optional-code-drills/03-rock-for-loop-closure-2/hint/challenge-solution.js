// For Loop Closure



// Do not write code outside of the designated area.
//
// This function should console 0 through 4 after 2 seconds
function delayedPrint() {
  for (var i=0; i<5; i++) {
    setTimeout(
      // -------------------- Your Code Here --------------------
      
      // Defining an anonymous function that we will be invoking
      // immediately
      
      "Placeholder to remove errors. Remove this when you start :)"
      
        // Because this anonymous function is invoked immediately,
        // the variable we declare within this function will be
        // assigned the current value of `i`. 

        
        // The function we're returning is the function that's
        // actually run when the setTimeout occurs in 2 seconds.
        // The instance of `captureValue` it uses is the one from
        // the anonymous function we're invoking right now. 
        // Future calls of this anonymous function will each be a
        // seperate instance so it will preserve the value of `i`
        // for the function it returns to `setTimeout`.

        

      // Parentheses mean the anonymous function we just defined 
      // is immediately invoked, therefor it uses the current
      // value of `i` since it's not waiting until after the
      // for loop in order to execute.

      

      // -------------------- End Code Area ---------------------
      , 2000)
  }
}

/* 
Should console log:
  0
  1
  2
  3
  4
*/
delayedPrint()