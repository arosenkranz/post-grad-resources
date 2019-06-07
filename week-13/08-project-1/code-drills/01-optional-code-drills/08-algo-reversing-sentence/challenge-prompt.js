// Reversing a Sentence


// Write a function `reverse` that takes in a string of words seperated
// by spaces and returns a new string that contains those words in
// reverse order


// ----------------------------------------------------------
//                      Reverse a Sentence
// ----------------------------------------------------------
function reverse(str) {
  // -------------------- Your Code Here --------------------






  // --------------------- End Code Area --------------------
}



// --------------------------- Test Cases ---------------------------
//
//
// ---------------------------- Test 01 -----------------------------
var teststr1 = "hello world hello";
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 01</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be "hello world hello"</p>
      <hr class="mb-5">
      <p class="text-left">${reverse(teststr1)}</p> 
    </div>
  </div>
`)

// ---------------------------- Test 02 -----------------------------
var teststr2 = "sentence";
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 02</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be "sentence"</p>
      <hr class="mb-5">
      <p class="text-left">${reverse(teststr2)}</p> 
    </div>
  </div>
`)

// ---------------------------- Test 03 -----------------------------
var teststr3 = "it does not matter how slowly you go as long as you do not stop";
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 03</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be "stop not do you as long as go you slowly how matter not does it"</p>
      <hr class="mb-5">
      <p class="text-left">${reverse(teststr3)}</p> 
    </div>
  </div>
`)
