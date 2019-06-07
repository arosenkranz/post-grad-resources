// Repeated Words


// The `findRepeats` function should take in one array of strings and
// find the strings that are repeated within the argument. Return a new
// array containing the repeated strings in alphabetical order.



// ----------------------------------------------------------
//                        Repeated Words
// ----------------------------------------------------------
function findRepeats(arr) {
  // -------------------- Your Code Here --------------------

  // create an object to keep track of how many times we've seen words
  var words = {};

  // create the array we're going to be returning
  var repeated = [];

  // iterate through the argument
  for (var i=0; i<arr.length; i++) {

    // if we've already encountered the current word, increment the count of 
    // of the number of times we've seen the word
    if (words.hasOwnProperty(arr[i])){
      words[arr[i]]++;

      // the first time we encounter the word again (count is 2), we add it to
      // the output array
      if (words[arr[i]] === 2) {
        repeated.push(arr[i]);
      }
    } else {

      // if this is our first time seeing the word, add it to the object with a
      // count of 1
      words[arr[i]] = 1;
    }
  }

  // sort the array and return it
  return repeated.sort();

  // --------------------- End Code Area --------------------
}




// --------------------------- Test Cases ---------------------------
//
//
// ---------------------------- Test 01 -----------------------------
var testarr1 = ["strong", "abridge", "critic", "beach", "abridge", "strong", "critic"];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 01</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [abridge,critic,strong]</p>
      <hr class="mb-5">
      <p class="text-left">[${findRepeats(testarr1)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 02 -----------------------------
var testarr2 = ["boat", "craftsman", "improve", "boat", "improve", "craftsman", "boat", "boat"];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 02</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [boat,craftsman,improve]</p>
      <hr class="mb-5">
      <p class="text-left">[${findRepeats(testarr2)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 03 -----------------------------
var testarr3 = ["package", "bounce", "duck", "basket", "scholar", "baskets", "sport"];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 03</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be []</p>
      <hr class="mb-5">
      <p class="text-left">[${findRepeats(testarr3)}]</p> 
    </div>
  </div>
`)
