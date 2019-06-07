// For Loop Closure



// We will be discovering the behavior of this function during this activity
function delayedPrint() {
  for (var i=0; i<5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 2000);
  }
}

// Without invoking `delayedPrint`, what does `delayedPrint` console 
// log out after 2 seconds?
//
/* --------------- YOUR ANSWER HERE ---------------

  5
  5
  5
  5
  5

   --------------- END ANSWER AREA ---------------- */



// Invoke `delayedPrint` and compare the output to what you expected.
//
// ---------- INVOKE `delayedPrint` HERE ----------
delayedPrint()

// ------------- END INVOCATION AREA --------------


// Without changing your answer to the first section, explain why the
// `delayedPrint` function behaves the way it does. 
//
/* --------------- YOUR ANSWER HERE ---------------

  Because of the `setTimeout`, the function that actually gets executed
  when the `setTimeout` triggers after 2 seconds isn't evaluated until
  after those 2 seconds. 
  
  The for loop happens immediately and creates all the `setTimeout`s, 
  but when they trigger and look for a value for `i`, `i` has already 
  changed from when they were first created since the for loop has 
  already completed. 
  
  The functions executed by `setTimeout` will look for the current
  value of `i` within their scope at the time of execution which is
  the value of `i` at the end of the for loop.

   --------------- END ANSWER AREA ---------------- */
