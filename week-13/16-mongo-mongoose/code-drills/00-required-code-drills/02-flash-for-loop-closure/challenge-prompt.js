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





   --------------- END ANSWER AREA ---------------- */



// Invoke `delayedPrint` and compare the output to what you expected.
//
// ---------- INVOKE `delayedPrint` HERE ----------


// ------------- END INVOCATION AREA --------------


// Without changing your answer to the first section, explain why the
// `delayedPrint` function behaves the way it does. 
//
/* --------------- YOUR ANSWER HERE ---------------





   --------------- END ANSWER AREA ---------------- */